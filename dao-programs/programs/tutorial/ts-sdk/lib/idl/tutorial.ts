export type Tutorial = {
  version: '0.1.0';
  name: 'tutorial';
  instructions: [
    {
      name: 'airdrop';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVaultKafe';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintKafe';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'kafeTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bdrTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'bumpKafe';
          type: 'u8';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
        {
          name: 'isKafeDrop';
          type: 'bool';
        },
        {
          name: 'isBdrDrop';
          type: 'bool';
        },
      ];
    },
    {
      name: 'daoAddAdmin';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'admin';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'daoRemoveAdmin';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'admin';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'daoClose';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'superAdmin';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'daoInitialize';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'quorum';
          type: 'u64';
        },
        {
          name: 'minAmountToCreateProposal';
          type: 'u64';
        },
        {
          name: 'superAdmin';
          type: 'publicKey';
        },
        {
          name: 'authorities';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'daoSetAmountToCreateProposal';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'quorum';
          type: 'u64';
        },
      ];
    },
    {
      name: 'daoSetNonce';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u64';
        },
      ];
    },
    {
      name: 'daoSetQuorum';
      accounts: [
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'quorum';
          type: 'u64';
        },
      ];
    },
    {
      name: 'daoVaultClose';
      accounts: [
        {
          name: 'daoVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'superAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'superAdminTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'freeze';
          type: 'bool';
        },
      ];
    },
    {
      name: 'daoVaultInitialize';
      accounts: [
        {
          name: 'daoVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'guideTipping';
      accounts: [
        {
          name: 'tipperAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer2';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer1';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'signer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultKafe';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintKafe';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'creatorTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer1TokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer2TokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tipperTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'bumpVault';
          type: 'u8';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
      ];
    },
    {
      name: 'proposalClose';
      accounts: [
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
      ];
    },
    {
      name: 'proposalCreate';
      accounts: [
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bdrTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
        {
          name: 'slug';
          type: 'string';
        },
        {
          name: 'streamId';
          type: 'string';
        },
      ];
    },
    {
      name: 'proposalPublish';
      accounts: [
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultKafe';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintKafe';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bdrTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer1TokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer2TokenAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
      ];
    },
    {
      name: 'proposalSetState';
      accounts: [
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'state';
          type: 'string';
        },
      ];
    },
    {
      name: 'proposalSetCreator';
      accounts: [
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoVaultKafe';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintKafe';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'creatorTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bdrTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
      ];
    },
    {
      name: 'reviewerAssign';
      accounts: [
        {
          name: 'reviewer1';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reviewer2';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'prevReviewer1';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'prevReviewer2';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'force';
          type: 'bool';
        },
      ];
    },
    {
      name: 'reviewerCreate';
      accounts: [
        {
          name: 'reviewerAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'reviewer';
          type: 'publicKey';
        },
        {
          name: 'githubName';
          type: 'string';
        },
      ];
    },
    {
      name: 'reviewerDelete';
      accounts: [
        {
          name: 'reviewerAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'reviewer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'force';
          type: 'bool';
        },
      ];
    },
    {
      name: 'tipperClose';
      accounts: [
        {
          name: 'tipperAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tipper';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'voteCancel';
      accounts: [
        {
          name: 'voteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'author';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'voteCast';
      accounts: [
        {
          name: 'voteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposalAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bdrTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'daoVaultBdr';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintBdr';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'author';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'tutorialId';
          type: 'u64';
        },
        {
          name: 'bumpBdr';
          type: 'u8';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'daoAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'numberOfProposal';
            type: 'u64';
          },
          {
            name: 'quorum';
            type: 'u64';
          },
          {
            name: 'minAmountToCreateProposal';
            type: 'u64';
          },
          {
            name: 'superAdmin';
            type: 'publicKey';
          },
          {
            name: 'admins';
            type: {
              vec: 'publicKey';
            };
          },
        ];
      };
    },
    {
      name: 'proposalAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'id';
            type: 'u64';
          },
          {
            name: 'creator';
            type: 'publicKey';
          },
          {
            name: 'reviewer1';
            type: 'publicKey';
          },
          {
            name: 'reviewer2';
            type: 'publicKey';
          },
          {
            name: 'numberOfVoter';
            type: 'u64';
          },
          {
            name: 'createdAt';
            type: 'i64';
          },
          {
            name: 'tippedAmount';
            type: 'u64';
          },
          {
            name: 'tipperCount';
            type: 'u64';
          },
          {
            name: 'state';
            type: {
              defined: 'ProposalState';
            };
          },
          {
            name: 'streamId';
            type: 'string';
          },
          {
            name: 'slug';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'reviewerAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'pubkey';
            type: 'publicKey';
          },
          {
            name: 'numberOfAssignment';
            type: 'u8';
          },
          {
            name: 'githubName';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'tipperAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'tutorialId';
            type: 'u64';
          },
          {
            name: 'pubkey';
            type: 'publicKey';
          },
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'voteAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'id';
            type: 'u64';
          },
          {
            name: 'author';
            type: 'publicKey';
          },
          {
            name: 'votedAt';
            type: 'i64';
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'ProposalState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Submitted';
          },
          {
            name: 'Funded';
          },
          {
            name: 'Writing';
          },
          {
            name: 'ReadyToPublish';
          },
          {
            name: 'Published';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'InsufficientFundsInVault';
      msg: 'Error: Insufficient funds in vault';
    },
    {
      code: 6001;
      name: 'SlugTooLong';
      msg: 'Error: Given slug is too long';
    },
    {
      code: 6002;
      name: 'StreamIdSizeMissmatch';
      msg: "Error: Given streamId doesn't fit the expected size";
    },
    {
      code: 6003;
      name: 'AlreadyVoter';
      msg: 'Error: User has already voted';
    },
    {
      code: 6004;
      name: 'CannotCastVoteAnymore';
      msg: 'Error: You cannot cast a vote anymore';
    },
    {
      code: 6005;
      name: 'CannotCancelVoteAnymore';
      msg: 'Error: You cannot cancel a vote anymore';
    },
    {
      code: 6006;
      name: 'CannotDeleteAnAssignedReviewer';
      msg: 'Error: You cannot delete an assigned reviewer';
    },
    {
      code: 6007;
      name: 'ReviewerNeedToBeDifferents';
      msg: 'Error: You cannot assigned: same reviewer';
    },
    {
      code: 6008;
      name: 'CannotCloseProposalRemainingVoter';
      msg: 'Error: Remaining Voter Cannot Close proposal';
    },
    {
      code: 6009;
      name: 'UnauthorizedAccess';
      msg: 'Error: Not authorize to call the instruction';
    },
    {
      code: 6010;
      name: 'InvalidState';
      msg: 'Error: Cannot setState: Invalid State';
    },
    {
      code: 6011;
      name: 'BadPreviousState';
      msg: 'Error: Cannot setState: bad previous state';
    },
    {
      code: 6012;
      name: 'ActionOnlyPossibleForDefaultReviewer';
      msg: 'Error: Cannot set creator: constraint on current creator not reach ';
    },
    {
      code: 6013;
      name: 'NotEnoughSolError';
      msg: 'Error: Cannot tip: not enough SOL';
    },
    {
      code: 6014;
      name: 'CreatorCannotBeAReviewer';
      msg: 'Error: Assign Reviewer: Creator Cannot be reviewer';
    },
  ];
};

export const IDL: Tutorial = {
  version: '0.1.0',
  name: 'tutorial',
  instructions: [
    {
      name: 'airdrop',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVaultKafe',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintKafe',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'kafeTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bdrTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'bumpKafe',
          type: 'u8',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
        {
          name: 'isKafeDrop',
          type: 'bool',
        },
        {
          name: 'isBdrDrop',
          type: 'bool',
        },
      ],
    },
    {
      name: 'daoAddAdmin',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'admin',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'daoRemoveAdmin',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'admin',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'daoClose',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'superAdmin',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'daoInitialize',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'quorum',
          type: 'u64',
        },
        {
          name: 'minAmountToCreateProposal',
          type: 'u64',
        },
        {
          name: 'superAdmin',
          type: 'publicKey',
        },
        {
          name: 'authorities',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'daoSetAmountToCreateProposal',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'quorum',
          type: 'u64',
        },
      ],
    },
    {
      name: 'daoSetNonce',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'nonce',
          type: 'u64',
        },
      ],
    },
    {
      name: 'daoSetQuorum',
      accounts: [
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'quorum',
          type: 'u64',
        },
      ],
    },
    {
      name: 'daoVaultClose',
      accounts: [
        {
          name: 'daoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'superAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'superAdminTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'amount',
          type: 'u64',
        },
        {
          name: 'freeze',
          type: 'bool',
        },
      ],
    },
    {
      name: 'daoVaultInitialize',
      accounts: [
        {
          name: 'daoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'guideTipping',
      accounts: [
        {
          name: 'tipperAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultKafe',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintKafe',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'creatorTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer1TokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer2TokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tipperTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'amount',
          type: 'u64',
        },
        {
          name: 'bumpVault',
          type: 'u8',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
      ],
    },
    {
      name: 'proposalClose',
      accounts: [
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'proposalCreate',
      accounts: [
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bdrTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
        {
          name: 'slug',
          type: 'string',
        },
        {
          name: 'streamId',
          type: 'string',
        },
      ],
    },
    {
      name: 'proposalPublish',
      accounts: [
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultKafe',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintKafe',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bdrTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer1TokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer2TokenAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
      ],
    },
    {
      name: 'proposalSetState',
      accounts: [
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'state',
          type: 'string',
        },
      ],
    },
    {
      name: 'proposalSetCreator',
      accounts: [
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoVaultKafe',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintKafe',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'creatorTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bdrTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
      ],
    },
    {
      name: 'reviewerAssign',
      accounts: [
        {
          name: 'reviewer1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reviewer2',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'prevReviewer1',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'prevReviewer2',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'force',
          type: 'bool',
        },
      ],
    },
    {
      name: 'reviewerCreate',
      accounts: [
        {
          name: 'reviewerAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'reviewer',
          type: 'publicKey',
        },
        {
          name: 'githubName',
          type: 'string',
        },
      ],
    },
    {
      name: 'reviewerDelete',
      accounts: [
        {
          name: 'reviewerAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'reviewer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'force',
          type: 'bool',
        },
      ],
    },
    {
      name: 'tipperClose',
      accounts: [
        {
          name: 'tipperAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tipper',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'voteCancel',
      accounts: [
        {
          name: 'voteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'author',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'voteCast',
      accounts: [
        {
          name: 'voteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposalAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bdrTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'daoVaultBdr',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintBdr',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'author',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'tutorialId',
          type: 'u64',
        },
        {
          name: 'bumpBdr',
          type: 'u8',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'daoAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'nonce',
            type: 'u64',
          },
          {
            name: 'numberOfProposal',
            type: 'u64',
          },
          {
            name: 'quorum',
            type: 'u64',
          },
          {
            name: 'minAmountToCreateProposal',
            type: 'u64',
          },
          {
            name: 'superAdmin',
            type: 'publicKey',
          },
          {
            name: 'admins',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'proposalAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'id',
            type: 'u64',
          },
          {
            name: 'creator',
            type: 'publicKey',
          },
          {
            name: 'reviewer1',
            type: 'publicKey',
          },
          {
            name: 'reviewer2',
            type: 'publicKey',
          },
          {
            name: 'numberOfVoter',
            type: 'u64',
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'tippedAmount',
            type: 'u64',
          },
          {
            name: 'tipperCount',
            type: 'u64',
          },
          {
            name: 'state',
            type: {
              defined: 'ProposalState',
            },
          },
          {
            name: 'streamId',
            type: 'string',
          },
          {
            name: 'slug',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'reviewerAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'pubkey',
            type: 'publicKey',
          },
          {
            name: 'numberOfAssignment',
            type: 'u8',
          },
          {
            name: 'githubName',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'tipperAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'tutorialId',
            type: 'u64',
          },
          {
            name: 'pubkey',
            type: 'publicKey',
          },
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'voteAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'id',
            type: 'u64',
          },
          {
            name: 'author',
            type: 'publicKey',
          },
          {
            name: 'votedAt',
            type: 'i64',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'ProposalState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Submitted',
          },
          {
            name: 'Funded',
          },
          {
            name: 'Writing',
          },
          {
            name: 'ReadyToPublish',
          },
          {
            name: 'Published',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InsufficientFundsInVault',
      msg: 'Error: Insufficient funds in vault',
    },
    {
      code: 6001,
      name: 'SlugTooLong',
      msg: 'Error: Given slug is too long',
    },
    {
      code: 6002,
      name: 'StreamIdSizeMissmatch',
      msg: "Error: Given streamId doesn't fit the expected size",
    },
    {
      code: 6003,
      name: 'AlreadyVoter',
      msg: 'Error: User has already voted',
    },
    {
      code: 6004,
      name: 'CannotCastVoteAnymore',
      msg: 'Error: You cannot cast a vote anymore',
    },
    {
      code: 6005,
      name: 'CannotCancelVoteAnymore',
      msg: 'Error: You cannot cancel a vote anymore',
    },
    {
      code: 6006,
      name: 'CannotDeleteAnAssignedReviewer',
      msg: 'Error: You cannot delete an assigned reviewer',
    },
    {
      code: 6007,
      name: 'ReviewerNeedToBeDifferents',
      msg: 'Error: You cannot assigned: same reviewer',
    },
    {
      code: 6008,
      name: 'CannotCloseProposalRemainingVoter',
      msg: 'Error: Remaining Voter Cannot Close proposal',
    },
    {
      code: 6009,
      name: 'UnauthorizedAccess',
      msg: 'Error: Not authorize to call the instruction',
    },
    {
      code: 6010,
      name: 'InvalidState',
      msg: 'Error: Cannot setState: Invalid State',
    },
    {
      code: 6011,
      name: 'BadPreviousState',
      msg: 'Error: Cannot setState: bad previous state',
    },
    {
      code: 6012,
      name: 'ActionOnlyPossibleForDefaultReviewer',
      msg: 'Error: Cannot set creator: constraint on current creator not reach ',
    },
    {
      code: 6013,
      name: 'NotEnoughSolError',
      msg: 'Error: Cannot tip: not enough SOL',
    },
    {
      code: 6014,
      name: 'CreatorCannotBeAReviewer',
      msg: 'Error: Assign Reviewer: Creator Cannot be reviewer',
    },
  ],
};
