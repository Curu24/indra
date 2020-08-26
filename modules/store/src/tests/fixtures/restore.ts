export const RESTORE_RES = {
  channel: {
    addresses: {
      Token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      SAIToken: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
      DepositApp: "0x056c1CE097ab086962Bf665dF0891F7AABf17cB4",
      IdentityApp: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
      WithdrawApp: "0xc16Ec24Ae02dE58F45e0AC8497536B68942f1477",
      ProxyFactory: "0xD4fD4BdA175Ea7390F9e86f7A3980BF5c08b2483",
      ChallengeRegistry: "0x2bceDD76cBEcCC6f1C134A7E459aAe5efD2Cfd6C",
      HashLockTransferApp: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
      WithdrawInterpreter: "0x4583Aa6C567d2C56a3e0e93Aff293Ff10Ebdb4D0",
      FastSignedTransferApp: "0x28a233f0988C67791070cFE560d1E671A293c4C4",
      MinimumViableMultisig: "0x53D3676CE54e00F3760FEf931aFb1ad8eF61781A",
      SimpleTwoPartySwapApp: "0xf971BFf28aCe64e2E3A44d6D61a080474496c0f1",
      TimeLockedPassThrough: "0xdf96C0eA4Df9cDFcacd95a75a2fFB1A981339e0a",
      GraphSignedTransferApp: "0x9B7fb41b99c5D860215DF6BedBDFc8E1D2933AB4",
      GraphBatchedTransferApp: "0xa14a9E1B88Df6e9839f7018A7a2a7180C425ECC9",
      SimpleLinkedTransferApp: "0x17d3ceFc4DBFb960bc54A8Ef65300D0523D9b7Fd",
      SimpleSignedTransferApp: "0xc8a182534739Ef8636Abbe3FABC29fd0ADb4D25D",
      TwoPartyFixedOutcomeInterpreter: "0xAc9dD3AA3f52b2420c8ABf283C9479a86d323181",
      ConditionalTransactionDelegateTarget: "0x5AdC9D43A5E252A7202cD8A3A513B240CE132745",
      SingleAssetTwoPartyCoinTransferInterpreter: "0x394A96e7736AB6d3CCF608117b66aACeA357Af4C",
      MultiAssetMultiPartyCoinTransferInterpreter: "0x2B28D41E4215916056E01a1d7d66512319A1438A",
      TwoPartyFixedOutcomeFromVirtualAppInterpreter: "0x87dfB382C6E4c5C7395164708B77691B71746Ab7",
    },
    appInstances: [],
    chainId: 1,
    freeBalanceAppInstance: {
      appDefinition: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
      abiEncodings: {
        stateEncoding:
          "tuple(address[] tokenAddresses, tuple(address to, uint256 amount)[][] balances, bytes32[] activeApps)",
        actionEncoding: null,
      },
      appSeqNo: 1,
      defaultTimeout: "0x21c0",
      identityHash: "0x0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb",
      latestState: {
        balances: [
          [
            { to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7", amount: "50000000000000000" },
            { to: "0x0115d9734433fd4855705903d52B6b703933097c", amount: "15000000000000000" },
          ],
          [
            { to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7", amount: "0" },
            { to: "0x0115d9734433fd4855705903d52B6b703933097c", amount: "0" },
          ],
        ],
        activeApps: [],
        tokenAddresses: [
          "0x0000000000000000000000000000000000000000",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
      },
      stateTimeout: "0x00",
      latestVersionNumber: 7,
      multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
      outcomeType: "MULTI_ASSET_MULTI_PARTY_COIN_TRANSFER",
      initiatorIdentifier: "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
      responderIdentifier: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
      outcomeInterpreterParameters: { limit: [], tokenAddresses: [] },
      meta: null,
      initiatorDeposit: "0",
      initiatorDepositAssetId: "0x0000000000000000000000000000000000000000",
      responderDeposit: "0",
      responderDepositAssetId: "0x0000000000000000000000000000000000000000",
    },
    monotonicNumProposedApps: 5,
    multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
    proposedAppInstances: [
      [
        "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
        {
          appDefinition: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
          abiEncodings: {
            stateEncoding:
              "tuple( tuple( address to, uint256 amount)[2] coinTransfers, bytes32 lockHash, bytes32 preImage, uint256 expiry, bool finalized)",
            actionEncoding: "tuple( bytes32 preImage)",
          },
          appSeqNo: 3,
          defaultTimeout: "0x10e0",
          identityHash: "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
          latestState: {
            expiry: "10692907",
            lockHash: "0xf6895ad088fa3203172438c53bdc58cf38b89d86e400c3eb283c2b3cd4fbb705",
            preImage: "0x0000000000000000000000000000000000000000000000000000000000000000",
            finalized: false,
            coinTransfers: [
              { to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7", amount: "15000000000000000" },
              { to: "0x0115d9734433fd4855705903d52B6b703933097c", amount: "0" },
            ],
          },
          stateTimeout: "0x00",
          latestVersionNumber: 1,
          multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
          outcomeType: "SINGLE_ASSET_TWO_PARTY_COIN_TRANSFER",
          initiatorIdentifier: "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
          responderIdentifier: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
          outcomeInterpreterParameters: {
            limit: "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            tokenAddress: "0x0000000000000000000000000000000000000000",
          },
          meta: {
            sender: "indra8izy9k89Q1EFRcHbu4uPFt6P6W5fR2zxf7mWXQYMw5DcYxp92s",
            timelock: "7022",
            paymentId: "0x27f0898932b3f9a60da08d6c8c104a62c6fe0e67b8868b6d4f2400ace8203ae9",
            recipient: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
            senderAssetId: "0x0000000000000000000000000000000000000000",
          },
          initiatorDeposit: "15000000000000000",
          initiatorDepositAssetId: "0x0000000000000000000000000000000000000000",
          responderDeposit: "0",
          responderDepositAssetId: "0x0000000000000000000000000000000000000000",
        },
      ],
    ],
    schemaVersion: 2,
    userIdentifiers: [
      "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
      "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
    ],
  },
  setupCommitment: {
    to: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
    value: "0",
    data:
      "0x58cb5e5a0000000000000000000000005adc9d43a5e252a7202cd8a3a513b240ce132745000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000006491c5d52e0000000000000000000000002bcedd76cbeccc6f1c134a7e459aae5efd2cfd6c0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb0000000000000000000000002b28d41e4215916056e01a1d7d66512319a1438a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000413713bfb3b7ab132f65befa739b163c8f27bd030f5f36400ec53cd33822825a1e12573ef40ed3aa14117c7f63aa07b717392c9e87e55ca43991a41298ab2477331b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041b861aa57e51afd9cb126bf971711ac0fe3c6ae4025f20856c1ef1953bd69040e02eb7ca0ee9248f630f0497b44bc9d1ba2ff78fa245e33ed423a89ca0c00b83e1b00000000000000000000000000000000000000000000000000000000000000",
  },
  setStateCommitments: [
    [
      "0x0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb",
      {
        appIdentity: {
          channelNonce: "1",
          participants: [
            "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
            "0x0115d9734433fd4855705903d52B6b703933097c",
          ],
          appDefinition: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
          defaultTimeout: "8640",
          multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
        },
        appIdentityHash: "0x0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb",
        appStateHash: "0x8005ea2e7faf326c1eec11fa2a202f6fb75bf6f9a12635658b000b62ddfc630c",
        challengeRegistryAddress: "0x2bceDD76cBEcCC6f1C134A7E459aAe5efD2Cfd6C",
        signatures: [
          "0xe9cf004f79e0a345bf0dfb56184732c1224cfaedbbda6c5e180306fbb5a2bb652f335783a38087f095ef5f34a0a384f32c2076d560cdee1a8b7dc4a6e6e5290c1c",
          "0x26a147216d855f3ad241a50df8a577e6a39be45c402f33dbd355d8e5ff94433704bb4ad2b23d2f8205bec22b4bf69d8276e5fffbd08b3bbb12458c3ef9e25a051c",
        ],
        stateTimeout: "0",
        transactionData:
          "0xa69aa2ab00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000140000000000000000000000000d348c80f34ef4b1ef408d48805dfee827e82999a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000007c1ce2f0c8766bbd90b5d2ed84da4962beb640d100000000000000000000000000000000000000000000000000000000000021c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009a5a06ac25d6b8ca1f68f87238796a0ffbdc14b70000000000000000000000000115d9734433fd4855705903d52b6b703933097c8005ea2e7faf326c1eec11fa2a202f6fb75bf6f9a12635658b000b62ddfc630c0000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041e9cf004f79e0a345bf0dfb56184732c1224cfaedbbda6c5e180306fbb5a2bb652f335783a38087f095ef5f34a0a384f32c2076d560cdee1a8b7dc4a6e6e5290c1c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004126a147216d855f3ad241a50df8a577e6a39be45c402f33dbd355d8e5ff94433704bb4ad2b23d2f8205bec22b4bf69d8276e5fffbd08b3bbb12458c3ef9e25a051c00000000000000000000000000000000000000000000000000000000000000",
        versionNumber: "7",
      },
    ],
    [
      "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
      {
        appIdentity: {
          channelNonce: "3",
          participants: [
            "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
            "0x0115d9734433fd4855705903d52B6b703933097c",
          ],
          appDefinition: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
          defaultTimeout: "4320",
          multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
        },
        appIdentityHash: "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
        appStateHash: "0x1268c9dbb7b78d3eb383c5c21c3b5a398186d1d5787dc0f62656489870ba9aa3",
        challengeRegistryAddress: "0x2bceDD76cBEcCC6f1C134A7E459aAe5efD2Cfd6C",
        signatures: [
          "0xbbf11ff6a15c71392fd5113e9eba5ee6a4042bfab1500d94601a88c4aaec920921232f9b701e4b8c4f2b12a749e894e1cc4a3614c258fec69ead79e851baf5e91b",
          "0xe8d8157c5185fb93deab0cb25ff72ecd1bb8a373d2f1ef0602f02a04e2f3d96913489b694c9c903b61c58da08507801a483aa142abfe6d69656fba74a49949ec1b",
        ],
        stateTimeout: "0",
        transactionData:
          "0xa69aa2ab00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000140000000000000000000000000d348c80f34ef4b1ef408d48805dfee827e82999a000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000a00000000000000000000000002496f75e10f3e74aa756a82ca3fdcae7cfaf10b100000000000000000000000000000000000000000000000000000000000010e000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009a5a06ac25d6b8ca1f68f87238796a0ffbdc14b70000000000000000000000000115d9734433fd4855705903d52b6b703933097c1268c9dbb7b78d3eb383c5c21c3b5a398186d1d5787dc0f62656489870ba9aa30000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041bbf11ff6a15c71392fd5113e9eba5ee6a4042bfab1500d94601a88c4aaec920921232f9b701e4b8c4f2b12a749e894e1cc4a3614c258fec69ead79e851baf5e91b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041e8d8157c5185fb93deab0cb25ff72ecd1bb8a373d2f1ef0602f02a04e2f3d96913489b694c9c903b61c58da08507801a483aa142abfe6d69656fba74a49949ec1b00000000000000000000000000000000000000000000000000000000000000",
        versionNumber: "1",
      },
    ],
  ],
  conditionalCommitments: [
    [
      "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
      {
        appIdentityHash: "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
        freeBalanceAppIdentityHash:
          "0x0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb",
        contractAddresses: {
          Token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          SAIToken: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
          DepositApp: "0x056c1CE097ab086962Bf665dF0891F7AABf17cB4",
          IdentityApp: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
          WithdrawApp: "0xc16Ec24Ae02dE58F45e0AC8497536B68942f1477",
          ProxyFactory: "0xD4fD4BdA175Ea7390F9e86f7A3980BF5c08b2483",
          ChallengeRegistry: "0x2bceDD76cBEcCC6f1C134A7E459aAe5efD2Cfd6C",
          HashLockTransferApp: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
          WithdrawInterpreter: "0x4583Aa6C567d2C56a3e0e93Aff293Ff10Ebdb4D0",
          FastSignedTransferApp: "0x28a233f0988C67791070cFE560d1E671A293c4C4",
          MinimumViableMultisig: "0x53D3676CE54e00F3760FEf931aFb1ad8eF61781A",
          SimpleTwoPartySwapApp: "0xf971BFf28aCe64e2E3A44d6D61a080474496c0f1",
          TimeLockedPassThrough: "0xdf96C0eA4Df9cDFcacd95a75a2fFB1A981339e0a",
          GraphSignedTransferApp: "0x9B7fb41b99c5D860215DF6BedBDFc8E1D2933AB4",
          GraphBatchedTransferApp: "0xa14a9E1B88Df6e9839f7018A7a2a7180C425ECC9",
          SimpleLinkedTransferApp: "0x17d3ceFc4DBFb960bc54A8Ef65300D0523D9b7Fd",
          SimpleSignedTransferApp: "0xc8a182534739Ef8636Abbe3FABC29fd0ADb4D25D",
          TwoPartyFixedOutcomeInterpreter: "0xAc9dD3AA3f52b2420c8ABf283C9479a86d323181",
          ConditionalTransactionDelegateTarget: "0x5AdC9D43A5E252A7202cD8A3A513B240CE132745",
          SingleAssetTwoPartyCoinTransferInterpreter: "0x394A96e7736AB6d3CCF608117b66aACeA357Af4C",
          MultiAssetMultiPartyCoinTransferInterpreter: "0x2B28D41E4215916056E01a1d7d66512319A1438A",
          TwoPartyFixedOutcomeFromVirtualAppInterpreter:
            "0x87dfB382C6E4c5C7395164708B77691B71746Ab7",
        },
        signatures: [
          "0xd5cc4475ffceb610b0aa4f36ccc54bcfe6e7d5ea735c1dfb6f79bc3c09a362452b622c70e8b87b3c6d5f73ff08ae36082e5da6a2abfeb063c43e403e6d63ec701c",
          "0x8c13d87a9afbb5ba5f24ae3f6787ffdfbf41d7eafb2728a5bf83881608a646853897b57438815be0b713860b02b2faa2df300a4555f9fa48674608b42dfdf38c1b",
        ],
        interpreterAddr: "0x394A96e7736AB6d3CCF608117b66aACeA357Af4C",
        interpreterParams:
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
        multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
        multisigOwners: [
          "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
          "0x0115d9734433fd4855705903d52B6b703933097c",
        ],
        transactionData:
          "0x6858b1540000000000000000000000002bcedd76cbeccc6f1c134a7e459aae5efd2cfd6c0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee000000000000000000000000394a96e7736ab6d3ccf608117b66aacea357af4c00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000040ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
      },
    ],
  ],
};

export const EXPECTED_CHANNEL = {
  addresses: {
    Token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    SAIToken: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
    DepositApp: "0x056c1CE097ab086962Bf665dF0891F7AABf17cB4",
    IdentityApp: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
    WithdrawApp: "0xc16Ec24Ae02dE58F45e0AC8497536B68942f1477",
    ProxyFactory: "0xD4fD4BdA175Ea7390F9e86f7A3980BF5c08b2483",
    ChallengeRegistry: "0x2bceDD76cBEcCC6f1C134A7E459aAe5efD2Cfd6C",
    HashLockTransferApp: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
    WithdrawInterpreter: "0x4583Aa6C567d2C56a3e0e93Aff293Ff10Ebdb4D0",
    FastSignedTransferApp: "0x28a233f0988C67791070cFE560d1E671A293c4C4",
    MinimumViableMultisig: "0x53D3676CE54e00F3760FEf931aFb1ad8eF61781A",
    SimpleTwoPartySwapApp: "0xf971BFf28aCe64e2E3A44d6D61a080474496c0f1",
    TimeLockedPassThrough: "0xdf96C0eA4Df9cDFcacd95a75a2fFB1A981339e0a",
    GraphSignedTransferApp: "0x9B7fb41b99c5D860215DF6BedBDFc8E1D2933AB4",
    GraphBatchedTransferApp: "0xa14a9E1B88Df6e9839f7018A7a2a7180C425ECC9",
    SimpleLinkedTransferApp: "0x17d3ceFc4DBFb960bc54A8Ef65300D0523D9b7Fd",
    SimpleSignedTransferApp: "0xc8a182534739Ef8636Abbe3FABC29fd0ADb4D25D",
    TwoPartyFixedOutcomeInterpreter: "0xAc9dD3AA3f52b2420c8ABf283C9479a86d323181",
    ConditionalTransactionDelegateTarget: "0x5AdC9D43A5E252A7202cD8A3A513B240CE132745",
    SingleAssetTwoPartyCoinTransferInterpreter: "0x394A96e7736AB6d3CCF608117b66aACeA357Af4C",
    MultiAssetMultiPartyCoinTransferInterpreter: "0x2B28D41E4215916056E01a1d7d66512319A1438A",
    TwoPartyFixedOutcomeFromVirtualAppInterpreter: "0x87dfB382C6E4c5C7395164708B77691B71746Ab7",
  },
  appInstances: [],
  chainId: 1,
  freeBalanceAppInstance: {
    appDefinition: "0x7C1cE2f0C8766BBd90b5d2ED84da4962beb640D1",
    abiEncodings: {
      stateEncoding:
        "tuple(address[] tokenAddresses, tuple(address to, uint256 amount)[][] balances, bytes32[] activeApps)",
      actionEncoding: null,
    },
    appSeqNo: 1,
    defaultTimeout: "0x21c0",
    identityHash: "0x0d12e14b513e885e9ed81b3739a87702cf3a527817b3570c05f5594a389a00bb",
    latestState: {
      balances: [
        [
          {
            to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
            amount: "50000000000000000",
          },
          {
            to: "0x0115d9734433fd4855705903d52B6b703933097c",
            amount: "15000000000000000",
          },
        ],
        [
          {
            to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
            amount: "0",
          },
          {
            to: "0x0115d9734433fd4855705903d52B6b703933097c",
            amount: "0",
          },
        ],
      ],
      activeApps: [],
      tokenAddresses: [
        "0x0000000000000000000000000000000000000000",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      ],
    },
    stateTimeout: "0x00",
    latestVersionNumber: 7,
    multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
    outcomeType: "MULTI_ASSET_MULTI_PARTY_COIN_TRANSFER",
    initiatorIdentifier: "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
    responderIdentifier: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
    outcomeInterpreterParameters: {
      limit: [],
      tokenAddresses: [],
    },
    meta: null,
    initiatorDeposit: "0",
    initiatorDepositAssetId: "0x0000000000000000000000000000000000000000",
    responderDeposit: "0",
    responderDepositAssetId: "0x0000000000000000000000000000000000000000",
  },
  monotonicNumProposedApps: 5,
  multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
  proposedAppInstances: [
    [
      "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
      {
        appDefinition: "0x2496f75e10f3e74AA756a82cA3fdcAE7cfaF10b1",
        abiEncodings: {
          stateEncoding:
            "tuple( tuple( address to, uint256 amount)[2] coinTransfers, bytes32 lockHash, bytes32 preImage, uint256 expiry, bool finalized)",
          actionEncoding: "tuple( bytes32 preImage)",
        },
        appSeqNo: 3,
        defaultTimeout: "0x10e0",
        identityHash: "0x76ca969cd83208d7342ba24d6a9be3ed7842ebd2bff82368c3e9e5f2379882ee",
        latestState: {
          expiry: "10692907",
          lockHash: "0xf6895ad088fa3203172438c53bdc58cf38b89d86e400c3eb283c2b3cd4fbb705",
          preImage: "0x0000000000000000000000000000000000000000000000000000000000000000",
          finalized: false,
          coinTransfers: [
            {
              to: "0x9a5a06AC25D6b8Ca1f68f87238796a0FfBDc14B7",
              amount: "15000000000000000",
            },
            {
              to: "0x0115d9734433fd4855705903d52B6b703933097c",
              amount: "0",
            },
          ],
        },
        stateTimeout: "0x00",
        latestVersionNumber: 1,
        multisigAddress: "0xD348c80f34eF4B1EF408d48805dFEE827e82999a",
        outcomeType: "SINGLE_ASSET_TWO_PARTY_COIN_TRANSFER",
        initiatorIdentifier: "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
        responderIdentifier: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
        outcomeInterpreterParameters: {
          limit: "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          tokenAddress: "0x0000000000000000000000000000000000000000",
        },
        meta: {
          sender: "indra8izy9k89Q1EFRcHbu4uPFt6P6W5fR2zxf7mWXQYMw5DcYxp92s",
          timelock: "7022",
          paymentId: "0x27f0898932b3f9a60da08d6c8c104a62c6fe0e67b8868b6d4f2400ace8203ae9",
          recipient: "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
          senderAssetId: "0x0000000000000000000000000000000000000000",
        },
        initiatorDeposit: "15000000000000000",
        initiatorDepositAssetId: "0x0000000000000000000000000000000000000000",
        responderDeposit: "0",
        responderDepositAssetId: "0x0000000000000000000000000000000000000000",
      },
    ],
  ],
  schemaVersion: 2,
  userIdentifiers: [
    "indra7uhB1UYhesBPsbdbPmGw6SZi8pwVvLMDBhSFZyQcZeVi5ydggS",
    "indra5uZGGt711XtZZw6JnthQJsoNHC2cRj3xJ7WvW4mcUweAu95FnH",
  ],
};
