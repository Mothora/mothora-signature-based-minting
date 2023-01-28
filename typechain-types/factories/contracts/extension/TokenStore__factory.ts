/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenStore,
  TokenStoreInterface,
} from "../../../contracts/extension/TokenStore";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
    ],
    name: "getTokenCountOfBundle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getTokenOfBundle",
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
        internalType: "struct ITokenBundle.Token",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
    ],
    name: "getUriOfBundle",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506106d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806301ffc9a7146100675780631da799c91461008f57806361195e94146100af578063bc197c81146100cf578063d0d2fe2514610107578063f23a6e6114610135575b600080fd5b61007a6100753660046102d8565b610154565b60405190151581526020015b60405180910390f35b6100a261009d366004610309565b61018b565b6040516100869190610341565b6100c26100bd366004610397565b610233565b60405161008691906103b0565b6100ee6100dd366004610551565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610086565b610127610115366004610397565b60009081526020819052604090205490565b604051908152602001610086565b6100ee6101433660046105fb565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061018557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6101b7604080516080810190915260008082526020820190815260200160008152602001600081525090565b60008381526020818152604080832085845260020182529182902082516080810190935280546001600160a01b03811684529091830190600160a01b900460ff1680156102065761020661032b565b80156102145761021461032b565b8152600182015460208201526002909101546040909101529392505050565b600081815260208190526040902060010180546060919061025390610660565b80601f016020809104026020016040519081016040528092919081815260200182805461027f90610660565b80156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b50505050509050919050565b6000602082840312156102ea57600080fd5b81356001600160e01b03198116811461030257600080fd5b9392505050565b6000806040838503121561031c57600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b81516001600160a01b03168152602082015160808201906001811061037657634e487b7160e01b600052602160045260246000fd5b80602084015250604083015160408301526060830151606083015292915050565b6000602082840312156103a957600080fd5b5035919050565b600060208083528351808285015260005b818110156103dd578581018301518582016040015282016103c1565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461041557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156104595761045961041a565b604052919050565b600082601f83011261047257600080fd5b8135602067ffffffffffffffff82111561048e5761048e61041a565b8160051b61049d828201610430565b92835284810182019282810190878511156104b757600080fd5b83870192505b848310156104d6578235825291830191908301906104bd565b979650505050505050565b600082601f8301126104f257600080fd5b813567ffffffffffffffff81111561050c5761050c61041a565b61051f601f8201601f1916602001610430565b81815284602083860101111561053457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561056957600080fd5b610572866103fe565b9450610580602087016103fe565b9350604086013567ffffffffffffffff8082111561059d57600080fd5b6105a989838a01610461565b945060608801359150808211156105bf57600080fd5b6105cb89838a01610461565b935060808801359150808211156105e157600080fd5b506105ee888289016104e1565b9150509295509295909350565b600080600080600060a0868803121561061357600080fd5b61061c866103fe565b945061062a602087016103fe565b93506040860135925060608601359150608086013567ffffffffffffffff81111561065457600080fd5b6105ee888289016104e1565b600181811c9082168061067457607f821691505b60208210810361069457634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212205b5b5a6474e3251bdeaede9f4e2a1146f8570ec44dd46079d322b6a940dba05964736f6c63430008110033";

type TokenStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenStore__factory extends ContractFactory {
  constructor(...args: TokenStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenStore> {
    return super.deploy(overrides || {}) as Promise<TokenStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenStore {
    return super.attach(address) as TokenStore;
  }
  override connect(signer: Signer): TokenStore__factory {
    return super.connect(signer) as TokenStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenStoreInterface {
    return new utils.Interface(_abi) as TokenStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenStore {
    return new Contract(address, _abi, signerOrProvider) as TokenStore;
  }
}
