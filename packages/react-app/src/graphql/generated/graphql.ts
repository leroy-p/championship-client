/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  scoreSet1User1?: Maybe<Scalars['Int']['output']>;
  scoreSet1User2?: Maybe<Scalars['Int']['output']>;
  scoreSet2User1?: Maybe<Scalars['Int']['output']>;
  scoreSet2User2?: Maybe<Scalars['Int']['output']>;
  scoreSet3User1?: Maybe<Scalars['Int']['output']>;
  scoreSet3User2?: Maybe<Scalars['Int']['output']>;
  user1: User;
  user2: User;
  winner?: Maybe<Scalars['Int']['output']>;
};

export type GameCompleteInput = {
  id: Scalars['Int']['input'];
  scoreSet1User1: Scalars['Int']['input'];
  scoreSet1User2: Scalars['Int']['input'];
  scoreSet2User1: Scalars['Int']['input'];
  scoreSet2User2: Scalars['Int']['input'];
  scoreSet3User1?: InputMaybe<Scalars['Int']['input']>;
  scoreSet3User2?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  gameCompleteOne: Scalars['Boolean']['output'];
  gameCreateManyFromUsers: Scalars['Boolean']['output'];
  removeUser: Scalars['Boolean']['output'];
  updateUser: User;
  userCreateMany: Scalars['Boolean']['output'];
  userCreateOne: Scalars['Boolean']['output'];
  userDeleteOne: Scalars['Boolean']['output'];
  userUpdateOne: Scalars['Boolean']['output'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationGameCompleteOneArgs = {
  input: GameCompleteInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUserCreateManyArgs = {
  input: Array<UserCreateInput>;
};


export type MutationUserCreateOneArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteOneArgs = {
  input: UserDeleteInput;
};


export type MutationUserUpdateOneArgs = {
  input: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  findManyUser: Array<User>;
  findOneUser?: Maybe<User>;
  gameFindMany: Array<Game>;
  userFindOne?: Maybe<UserWithGames>;
  userGetRanking: Array<UserWithGames>;
};


export type QueryFindOneUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserFindOneArgs = {
  input: UserFindOneInput;
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  lossesCount: Scalars['Int']['output'];
  lostPointsCount: Scalars['Int']['output'];
  lostSetsCount: Scalars['Int']['output'];
  playedCount: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  winsCount: Scalars['Int']['output'];
  wonPointsCount: Scalars['Int']['output'];
  wonSetsCount: Scalars['Int']['output'];
};

export type UserCreateInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type UserDeleteInput = {
  id: Scalars['Int']['input'];
};

export type UserFindOneInput = {
  id: Scalars['Int']['input'];
};

export type UserUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UserWithGames = {
  __typename?: 'UserWithGames';
  firstName: Scalars['String']['output'];
  games: Array<Game>;
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  lossesCount: Scalars['Int']['output'];
  lostPointsCount: Scalars['Int']['output'];
  lostSetsCount: Scalars['Int']['output'];
  playedCount: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  winsCount: Scalars['Int']['output'];
  wonPointsCount: Scalars['Int']['output'];
  wonSetsCount: Scalars['Int']['output'];
};

export type GameFindManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GameFindManyQuery = { __typename?: 'Query', gameFindMany: Array<{ __typename?: 'Game', id: number, index: number, scoreSet1User1?: number | null, scoreSet1User2?: number | null, scoreSet2User1?: number | null, scoreSet2User2?: number | null, scoreSet3User1?: number | null, scoreSet3User2?: number | null, winner?: number | null, user1: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number }, user2: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number } }> };

export type GameCompleteOneMutationVariables = Exact<{
  input: GameCompleteInput;
}>;


export type GameCompleteOneMutation = { __typename?: 'Mutation', gameCompleteOne: boolean };

export type UserGetRankingQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGetRankingQuery = { __typename?: 'Query', userGetRanking: Array<{ __typename?: 'UserWithGames', id: number, rank: number, firstName: string, lastName: string, points: number, winsCount: number, lossesCount: number, wonSetsCount: number, lostSetsCount: number, wonPointsCount: number, lostPointsCount: number, games: Array<{ __typename?: 'Game', id: number, index: number, scoreSet1User1?: number | null, scoreSet1User2?: number | null, scoreSet2User1?: number | null, scoreSet2User2?: number | null, scoreSet3User1?: number | null, scoreSet3User2?: number | null, winner?: number | null, user1: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number }, user2: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number } }> }> };

export type UserFindOneQueryVariables = Exact<{
  input: UserFindOneInput;
}>;


export type UserFindOneQuery = { __typename?: 'Query', userFindOne?: { __typename?: 'UserWithGames', id: number, rank: number, firstName: string, lastName: string, points: number, winsCount: number, lossesCount: number, wonSetsCount: number, lostSetsCount: number, wonPointsCount: number, lostPointsCount: number, games: Array<{ __typename?: 'Game', id: number, index: number, scoreSet1User1?: number | null, scoreSet1User2?: number | null, scoreSet2User1?: number | null, scoreSet2User2?: number | null, scoreSet3User1?: number | null, scoreSet3User2?: number | null, winner?: number | null, user1: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number }, user2: { __typename?: 'User', id: number, firstName: string, lastName: string, rank: number } }> } | null };


export const GameFindManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GameFindMany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameFindMany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"user1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User2"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}}]}}]}}]} as unknown as DocumentNode<GameFindManyQuery, GameFindManyQueryVariables>;
export const GameCompleteOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GameCompleteOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GameCompleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameCompleteOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<GameCompleteOneMutation, GameCompleteOneMutationVariables>;
export const UserGetRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserGetRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userGetRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"winsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lossesCount"}},{"kind":"Field","name":{"kind":"Name","value":"wonSetsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lostSetsCount"}},{"kind":"Field","name":{"kind":"Name","value":"wonPointsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lostPointsCount"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"user1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User2"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}}]}}]}}]}}]} as unknown as DocumentNode<UserGetRankingQuery, UserGetRankingQueryVariables>;
export const UserFindOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFindOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFindOneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFindOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"winsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lossesCount"}},{"kind":"Field","name":{"kind":"Name","value":"wonSetsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lostSetsCount"}},{"kind":"Field","name":{"kind":"Name","value":"wonPointsCount"}},{"kind":"Field","name":{"kind":"Name","value":"lostPointsCount"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"user1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet1User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet2User2"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User1"}},{"kind":"Field","name":{"kind":"Name","value":"scoreSet3User2"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}}]}}]}}]}}]} as unknown as DocumentNode<UserFindOneQuery, UserFindOneQueryVariables>;