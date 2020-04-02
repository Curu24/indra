import { BigNumberish, BigNumber } from "ethers/utils";

import { CoinTransfer } from "../funding";
import {
  singleAssetTwoPartyCoinTransferEncoding,
  tidy,
} from "../misc";
import { Address } from "../../basic";

export const DepositAppName = "DepositApp";

////////////////////////////////////////
// keep synced w contracts/funding/default-apps/DepositApp.sol

// Contract types
export type DepositAppState = {
  transfers: CoinTransfer[];
  multisigAddress: Address;
  assetId: Address;
  startingTotalAmountWithdrawn: BigNumber;
  startingMultisigBalance: BigNumber;
  timelock: BigNumber;
  finalized: boolean;
};

export type DepositAppAction = {
}

export const DepositAppStateEncoding = tidy(`tuple(
  ${singleAssetTwoPartyCoinTransferEncoding} transfers,
  address multisigAddress,
  address assetId,
  uint256 startingTotalAmountWithdrawn,
  uint256 startingMultisigBalance,
  uint256 timelock,
  bool finalized
)`);

export const DepositAppActionEncoding = tidy(`tuple()`);

////////////////////////////////////////
// Off-chain app types

// Input/output
export type DepositParameters = {
  amount: BigNumberish;
  assetId?: string; // if not provided, will default to 0x0 (Eth)
};

export type DepositResponse = {
  multisigAddress: string;
  appInstanceId: string;
};
