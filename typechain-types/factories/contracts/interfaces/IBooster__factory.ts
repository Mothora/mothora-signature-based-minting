/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBooster,
  IBoosterInterface,
} from "../../../contracts/interfaces/IBooster";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boosterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBoostersCreated",
        type: "uint256",
      },
    ],
    name: "BoosterCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boosterId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "opener",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numOfBoostersOpened",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITokenBundle.Token[]",
        name: "rewardUnitsDistributed",
        type: "tuple[]",
      },
    ],
    name: "BoosterOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boosterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBoostersCreated",
        type: "uint256",
      },
    ],
    name: "BoosterUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ITokenBundle.Token[]",
        name: "contents",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "numOfRewardUnits",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "boosterUri",
        type: "string",
      },
      {
        internalType: "uint128",
        name: "openStartTimestamp",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountDistributedPerOpen",
        type: "uint128",
      },
    ],
    name: "createBooster",
    outputs: [
      {
        internalType: "uint256",
        name: "boosterId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boosterTotalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "opener",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "boosterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct IBooster.OpenRequest",
        name: "_req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "openBooster",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ITokenBundle.Token[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBooster__factory {
  static readonly abi = _abi;
  static createInterface(): IBoosterInterface {
    return new utils.Interface(_abi) as IBoosterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBooster {
    return new Contract(address, _abi, signerOrProvider) as IBooster;
  }
}
