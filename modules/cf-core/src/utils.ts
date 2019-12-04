import {
  BigNumber,
  bigNumberify,
  getAddress,
  Interface,
  joinSignature,
  keccak256,
  recoverAddress,
  Signature,
  solidityKeccak256
} from "ethers/utils";
import memoize from "memoizee";

import { JSON_STRINGIFY_SPACE } from "./constants";
import { MinimumViableMultisig } from "./contracts";
import { xkeysToSortedKthAddresses } from "./machine/xkeys";

export function getFirstElementInListNotEqualTo(test: string, list: string[]) {
  return list.filter(x => x !== test)[0];
}

export function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Computes the address of a counterfactual MinimumViableMultisig contract
 * as it would be if deployed via the `createProxyWithNonce` method on a
 * ProxyFactory contract with the bytecode of a Proxy contract pointing to
 * a `masterCopy` of a MinimumViableMultisig contract.
 *
 * See https://solidity.readthedocs.io/en/v0.5.11/assembly.html?highlight=create2
 * for information on how CREAT2 addresses are calculated.
 *
 * @export
 * @param {string[]} owners - the addresses of the owners of the multisig
 * @param {string} proxyFactoryAddress - address of ProxyFactory library
 * @param {string} minimumViableMultisigAddress - address of masterCopy of multisig
 * @param {string} proxyBytecode - bytecode that will be used to deploy this multisig proxy
 *
 * @returns {string} the address of the multisig
 *
 * NOTE: if the encoding of the multisig owners is changed YOU WILL break all
 * existing channels
 */
export const getCreate2MultisigAddress = memoize(
  (
    owners: string[],
    proxyFactoryAddress: string,
    minimumViableMultisigAddress: string,
    proxyBytecode: string
  ): string =>
    getAddress(
      solidityKeccak256(
        ["bytes1", "address", "uint256", "bytes32"],
        [
          "0xff",
          proxyFactoryAddress,
          solidityKeccak256(
            ["bytes32", "uint256"],
            [
              keccak256(
                // see encoding notes
                new Interface(
                  MinimumViableMultisig.abi
                ).functions.setup.encode([xkeysToSortedKthAddresses(owners, 0)])
              ),
              0
            ]
          ),
          solidityKeccak256(
            ["bytes", "uint256"],
            [
              `0x${proxyBytecode.replace("0x", "")}`,
              minimumViableMultisigAddress
            ]
          )
        ]
      ).slice(-40)
    ),
  { max: 100, maxAge: 60 * 1000, primitive: true }
);

export const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

export const bigNumberifyJson = (json: object) =>
  JSON.parse(JSON.stringify(json), (
    // @ts-ignore
    key,
    val
  ) => (val && val["_hex"] ? bigNumberify(val) : val));

export const deBigNumberifyJson = (json: object) =>
  JSON.parse(JSON.stringify(json), (key, val) =>
    val && BigNumber.isBigNumber(val) ? val.toHexString() : val
  );
/**
 * Converts an array of signatures into a single string
 *
 * @param signatures An array of etherium signatures
 */
export function signaturesToBytes(...signatures: Signature[]): string {
  return signatures
    .map(joinSignature)
    .map(s => s.substr(2))
    .reduce((acc, v) => acc + v, "0x");
}

/**
 * Sorts signatures in ascending order of signer address
 *
 * @param signatures An array of etherium signatures
 */
export function sortSignaturesBySignerAddress(
  digest: string,
  signatures: Signature[]
): Signature[] {
  const ret = signatures.slice();
  ret.sort((sigA, sigB) => {
    const addrA = recoverAddress(digest, signaturesToBytes(sigA));
    const addrB = recoverAddress(digest, signaturesToBytes(sigB));
    return new BigNumber(addrA).lt(addrB) ? -1 : 1;
  });
  return ret;
}

/**
 * Sorts signatures in ascending order of signer address
 * and converts them into bytes
 *
 * @param signatures An array of etherium signatures
 */
export function signaturesToBytesSortedBySignerAddress(
  digest: string,
  ...signatures: Signature[]
): string {
  return signaturesToBytes(
    ...sortSignaturesBySignerAddress(digest, signatures)
  );
}

export function prettyPrintObject(object: any) {
  return JSON.stringify(object, null, JSON_STRINGIFY_SPACE);
}

export async function sleep(timeInMilliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, timeInMilliseconds));
}
