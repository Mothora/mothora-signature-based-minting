/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ContractMetadata,
  ContractMetadataInterface,
} from "../../../../@thirdweb-dev/contracts/extension/ContractMetadata";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ContractMetadata__factory {
  static readonly abi = _abi;
  static createInterface(): ContractMetadataInterface {
    return new utils.Interface(_abi) as ContractMetadataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractMetadata {
    return new Contract(address, _abi, signerOrProvider) as ContractMetadata;
  }
}
