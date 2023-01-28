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
} from "../../common";

export declare namespace ITokenBundle {
  export type TokenStruct = {
    assetContract: PromiseOrValue<string>;
    tokenType: PromiseOrValue<BigNumberish>;
    tokenId: PromiseOrValue<BigNumberish>;
    totalAmount: PromiseOrValue<BigNumberish>;
  };

  export type TokenStructOutput = [string, number, BigNumber, BigNumber] & {
    assetContract: string;
    tokenType: number;
    tokenId: BigNumber;
    totalAmount: BigNumber;
  };
}

export declare namespace IBooster {
  export type OpenRequestStruct = {
    opener: PromiseOrValue<string>;
    boosterId: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    validityStartTimestamp: PromiseOrValue<BigNumberish>;
    validityEndTimestamp: PromiseOrValue<BigNumberish>;
    uid: PromiseOrValue<BytesLike>;
  };

  export type OpenRequestStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    opener: string;
    boosterId: BigNumber;
    quantity: BigNumber;
    validityStartTimestamp: BigNumber;
    validityEndTimestamp: BigNumber;
    uid: string;
  };
}

export interface IBoosterInterface extends utils.Interface {
  functions: {
    "createBooster((address,uint8,uint256,uint256)[],uint256[],string,uint128,uint128)": FunctionFragment;
    "openBooster((address,uint256,uint256,uint128,uint128,bytes32),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createBooster" | "openBooster"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createBooster",
    values: [
      ITokenBundle.TokenStruct[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openBooster",
    values: [IBooster.OpenRequestStruct, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBooster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openBooster",
    data: BytesLike
  ): Result;

  events: {
    "BoosterCreated(uint256,uint256)": EventFragment;
    "BoosterOpened(uint256,address,uint256,tuple[])": EventFragment;
    "BoosterUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BoosterCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BoosterOpened"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BoosterUpdated"): EventFragment;
}

export interface BoosterCreatedEventObject {
  boosterId: BigNumber;
  totalBoostersCreated: BigNumber;
}
export type BoosterCreatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  BoosterCreatedEventObject
>;

export type BoosterCreatedEventFilter = TypedEventFilter<BoosterCreatedEvent>;

export interface BoosterOpenedEventObject {
  boosterId: BigNumber;
  opener: string;
  numOfBoostersOpened: BigNumber;
  rewardUnitsDistributed: ITokenBundle.TokenStructOutput[];
}
export type BoosterOpenedEvent = TypedEvent<
  [BigNumber, string, BigNumber, ITokenBundle.TokenStructOutput[]],
  BoosterOpenedEventObject
>;

export type BoosterOpenedEventFilter = TypedEventFilter<BoosterOpenedEvent>;

export interface BoosterUpdatedEventObject {
  boosterId: BigNumber;
  totalBoostersCreated: BigNumber;
}
export type BoosterUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  BoosterUpdatedEventObject
>;

export type BoosterUpdatedEventFilter = TypedEventFilter<BoosterUpdatedEvent>;

export interface IBooster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBoosterInterface;

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
    createBooster(
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: PromiseOrValue<BigNumberish>[],
      boosterUri: PromiseOrValue<string>,
      openStartTimestamp: PromiseOrValue<BigNumberish>,
      amountDistributedPerOpen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    openBooster(
      _req: IBooster.OpenRequestStruct,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createBooster(
    contents: ITokenBundle.TokenStruct[],
    numOfRewardUnits: PromiseOrValue<BigNumberish>[],
    boosterUri: PromiseOrValue<string>,
    openStartTimestamp: PromiseOrValue<BigNumberish>,
    amountDistributedPerOpen: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  openBooster(
    _req: IBooster.OpenRequestStruct,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createBooster(
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: PromiseOrValue<BigNumberish>[],
      boosterUri: PromiseOrValue<string>,
      openStartTimestamp: PromiseOrValue<BigNumberish>,
      amountDistributedPerOpen: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        boosterId: BigNumber;
        boosterTotalSupply: BigNumber;
      }
    >;

    openBooster(
      _req: IBooster.OpenRequestStruct,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<ITokenBundle.TokenStructOutput[]>;
  };

  filters: {
    "BoosterCreated(uint256,uint256)"(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      totalBoostersCreated?: null
    ): BoosterCreatedEventFilter;
    BoosterCreated(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      totalBoostersCreated?: null
    ): BoosterCreatedEventFilter;

    "BoosterOpened(uint256,address,uint256,tuple[])"(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      opener?: PromiseOrValue<string> | null,
      numOfBoostersOpened?: null,
      rewardUnitsDistributed?: null
    ): BoosterOpenedEventFilter;
    BoosterOpened(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      opener?: PromiseOrValue<string> | null,
      numOfBoostersOpened?: null,
      rewardUnitsDistributed?: null
    ): BoosterOpenedEventFilter;

    "BoosterUpdated(uint256,uint256)"(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      totalBoostersCreated?: null
    ): BoosterUpdatedEventFilter;
    BoosterUpdated(
      boosterId?: PromiseOrValue<BigNumberish> | null,
      totalBoostersCreated?: null
    ): BoosterUpdatedEventFilter;
  };

  estimateGas: {
    createBooster(
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: PromiseOrValue<BigNumberish>[],
      boosterUri: PromiseOrValue<string>,
      openStartTimestamp: PromiseOrValue<BigNumberish>,
      amountDistributedPerOpen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    openBooster(
      _req: IBooster.OpenRequestStruct,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createBooster(
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: PromiseOrValue<BigNumberish>[],
      boosterUri: PromiseOrValue<string>,
      openStartTimestamp: PromiseOrValue<BigNumberish>,
      amountDistributedPerOpen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    openBooster(
      _req: IBooster.OpenRequestStruct,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
