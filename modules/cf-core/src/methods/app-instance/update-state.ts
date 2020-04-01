import { MethodNames, MethodParams, MethodResults, ProtocolNames, IStoreService } from "@connext/types";
import { INVALID_ARGUMENT } from "ethers/errors";
import { jsonRpcMethod } from "rpc-server";

import {
  IMPROPERLY_FORMATTED_STRUCT,
  NO_APP_INSTANCE_FOR_TAKE_ACTION,
  STATE_OBJECT_NOT_ENCODABLE,
  NO_STATE_CHANNEL_FOR_APP_INSTANCE_ID,
  NO_APP_INSTANCE_FOR_GIVEN_ID,
} from "../../errors";
import { ProtocolRunner } from "../../machine";
import { RequestHandler } from "../../request-handler";
import { SolidityValueType } from "../../types";
import { getFirstElementInListNotEqualTo } from "../../utils";
import { NodeController } from "../controller";
import { AppInstance } from "../../models";

export class UpdateStateController extends NodeController {
  @jsonRpcMethod(MethodNames.chan_updateState)
  public executeMethod = super.executeMethod;

  protected async getRequiredLockNames(
    requestHandler: RequestHandler,
    params: MethodParams.UpdateState,
  ): Promise<string[]> {
    return [params.appInstanceId];
  }

  protected async beforeExecution(
    requestHandler: RequestHandler,
    params: MethodParams.UpdateState,
  ): Promise<void> {
    const { store } = requestHandler;
    const { appInstanceId, newState } = params;

    if (!appInstanceId) {
      throw new Error(NO_APP_INSTANCE_FOR_TAKE_ACTION);
    }

    const appJson = await store.getAppInstance(appInstanceId);
    if (!appJson) {
      throw new Error(NO_APP_INSTANCE_FOR_GIVEN_ID);
    }
    const appInstance = AppInstance.fromJson(appJson);

    try {
      appInstance.encodeState(newState);
    } catch (e) {
      if (e.code === INVALID_ARGUMENT) {
        throw new Error(`${IMPROPERLY_FORMATTED_STRUCT}: ${e.message}`);
      }
      throw new Error(STATE_OBJECT_NOT_ENCODABLE);
    }
  }

  protected async executeMethodImplementation(
    requestHandler: RequestHandler,
    params: MethodParams.UpdateState,
  ): Promise<MethodResults.UpdateState> {
    const { store, publicIdentifier, protocolRunner } = requestHandler;
    const { appInstanceId, newState } = params;

    const sc = await store.getStateChannelByAppInstanceId(appInstanceId);
    if (!sc) {
      throw new Error(NO_STATE_CHANNEL_FOR_APP_INSTANCE_ID(appInstanceId));
    }

    const responderXpub = getFirstElementInListNotEqualTo(
      publicIdentifier,
      sc.userNeuteredExtendedKeys,
    );

    await runUpdateStateProtocol(
      appInstanceId,
      store,
      protocolRunner,
      publicIdentifier,
      responderXpub,
      newState,
    );

    return { newState };
  }
}

async function runUpdateStateProtocol(
  appIdentityHash: string,
  store: IStoreService,
  protocolRunner: ProtocolRunner,
  initiatorXpub: string,
  responderXpub: string,
  newState: SolidityValueType,
) {
  const stateChannel = await store.getStateChannelByAppInstanceId(appIdentityHash);
  if (!stateChannel) {
    throw new Error(NO_STATE_CHANNEL_FOR_APP_INSTANCE_ID(appIdentityHash));
  }

  await protocolRunner.initiateProtocol(ProtocolNames.update, {
    initiatorXpub,
    responderXpub,
    appIdentityHash,
    newState,
    multisigAddress: stateChannel.multisigAddress,
  });
}