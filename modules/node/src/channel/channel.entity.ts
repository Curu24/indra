import {
  CriticalStateChannelAddresses,
  SingleAssetTwoPartyIntermediaryAgreement,
} from "@connext/types";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";

import { AppInstance } from "../appInstance/appInstance.entity";
import { OnchainTransaction } from "../onchainTransactions/onchainTransaction.entity";
import { RebalanceProfile } from "../rebalanceProfile/rebalanceProfile.entity";
import { LinkedTransfer, PeerToPeerTransfer } from "../transfer/transfer.entity";
import { IsEthAddress, IsXpub } from "../util";

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("integer")
  schemaVersion!: number;

  @Column("json")
  addresses!: CriticalStateChannelAddresses;

  @Column("text")
  @IsXpub()
  userPublicIdentifier!: string;

  // might not need this
  @Column("text")
  @IsXpub()
  nodePublicIdentifier!: string;

  @Column("text")
  @IsEthAddress()
  multisigAddress!: string;

  @Column("boolean", { default: false })
  available!: boolean;

  @Column("boolean", { default: false })
  collateralizationInFlight!: boolean;

  @OneToMany(
    (type: any) => AppInstance,
    (appInstance: AppInstance) => appInstance.channel,
  )
  appInstances!: AppInstance[];

  @OneToMany(
    (type: any) => AppInstance,
    (appInstance: AppInstance) => appInstance.channel,
  )
  proposedAppInstances!: AppInstance[];

  @OneToOne(
    (type: any) => AppInstance,
    (appInstance: AppInstance) => appInstance.channel,
  )
  freeBalanceAppInstance!: AppInstance;

  @Column("json")
  singleAssetTwoPartyIntermediaryAgreements!: [string, SingleAssetTwoPartyIntermediaryAgreement][];

  @Column("integer")
  monotonicNumProposedApps!: number;

  @ManyToMany(
    (type: any) => RebalanceProfile,
    (profile: RebalanceProfile) => profile.channels,
  )
  @JoinTable()
  rebalanceProfiles!: RebalanceProfile[];

  @OneToMany(
    (type: any) => LinkedTransfer,
    (transfer: LinkedTransfer) => transfer.senderChannel,
  )
  senderLinkedTransfers!: LinkedTransfer[];

  @OneToMany(
    (type: any) => LinkedTransfer,
    (transfer: LinkedTransfer) => transfer.receiverChannel,
  )
  receiverLinkedTransfers!: LinkedTransfer[];

  @OneToMany(
    (type: any) => LinkedTransfer,
    (transfer: LinkedTransfer) => transfer.senderChannel,
  )
  senderPeerToPeerTransfers!: LinkedTransfer[];

  @OneToMany(
    (type: any) => PeerToPeerTransfer,
    (transfer: PeerToPeerTransfer) => transfer.receiverChannel,
  )
  receiverPeerToPeerTransfers!: PeerToPeerTransfer[];

  @OneToMany(
    (type: any) => OnchainTransaction,
    (tx: OnchainTransaction) => tx.channel,
  )
  transactions!: OnchainTransaction[];
}
