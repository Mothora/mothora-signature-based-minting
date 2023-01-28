/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IRoyaltyInterface extends utils.Interface {
  functions: {
    "getDefaultRoyaltyInfo()": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDefaultRoyaltyInfo"
      | "royaltyInfo"
      | "setDefaultRoyaltyInfo"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDefaultRoyaltyInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultRoyaltyInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDefaultRoyaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultRoyaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "DefaultRoyalty(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
}

export interface DefaultRoyaltyEventObject {
  newRoyaltyRecipient: string;
  newRoyaltyBps: BigNumber;
}
export type DefaultRoyaltyEvent = TypedEvent<
  [string, BigNumber],
  DefaultRoyaltyEventObject
>;

export type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;

export interface IRoyalty extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRoyaltyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;

    setDefaultRoyaltyInfo(
      _royaltyRecipient: PromiseOrValue<string>,
      _royaltyBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;

  royaltyInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    salePrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
  >;

  setDefaultRoyaltyInfo(
    _royaltyRecipient: PromiseOrValue<string>,
    _royaltyBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;

    setDefaultRoyaltyInfo(
      _royaltyRecipient: PromiseOrValue<string>,
      _royaltyBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DefaultRoyalty(address,uint256)"(
      newRoyaltyRecipient?: PromiseOrValue<string> | null,
      newRoyaltyBps?: null
    ): DefaultRoyaltyEventFilter;
    DefaultRoyalty(
      newRoyaltyRecipient?: PromiseOrValue<string> | null,
      newRoyaltyBps?: null
    ): DefaultRoyaltyEventFilter;
  };

  estimateGas: {
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDefaultRoyaltyInfo(
      _royaltyRecipient: PromiseOrValue<string>,
      _royaltyBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDefaultRoyaltyInfo(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDefaultRoyaltyInfo(
      _royaltyRecipient: PromiseOrValue<string>,
      _royaltyBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}