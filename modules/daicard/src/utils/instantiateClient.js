import * as connext from "@connext/client";
import { store } from ".";

export let channel = null;

export async function instantiateClient(ethUrl, mnemonic, nodeUrl) {
  if (channel) {
    return channel;
  }
  channel = await connext.connect({
    ethProviderUrl: ethUrl,
    logLevel: 5,
    mnemonic,
    nodeUrl,
    store,
  });
  return channel;
}
