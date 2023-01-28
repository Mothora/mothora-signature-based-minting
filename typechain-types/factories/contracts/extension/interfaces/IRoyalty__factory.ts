/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRoyalty,
  IRoyaltyInterface,
} from "../../../../contracts/extension/interfaces/IRoyalty";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRoyaltyRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRoyaltyBps",
        type: "uint256",
      },
    ],
    name: "DefaultRoyalty",
    type: "event",
  },
  {
    inputs: [],
    name: "getDefaultRoyaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royaltyBps",
        type: "uint256",
      },
    ],
    name: "setDefaultRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRoyalty__factory {
  static readonly abi = _abi;
  static createInterface(): IRoyaltyInterface {
    return new utils.Interface(_abi) as IRoyaltyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRoyalty {
    return new Contract(address, _abi, signerOrProvider) as IRoyalty;
  }
}
