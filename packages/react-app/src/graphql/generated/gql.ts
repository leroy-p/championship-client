/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GameFindMany {\n  gameFindMany {\n    id\n    index\n    user1 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    user2 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    scoreSet1User1\n    scoreSet1User2\n    scoreSet2User1\n    scoreSet2User2\n    scoreSet3User1\n    scoreSet3User2\n    winner\n  }\n}\n\nmutation GameCompleteOne($input: GameCompleteInput!) {\n  gameCompleteOne(input: $input)\n}": typeof types.GameFindManyDocument,
    "query UserGetRanking {\n  userGetRanking {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}\n\nquery UserFindOne($input: UserFindOneInput!) {\n  userFindOne(input: $input) {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}": typeof types.UserGetRankingDocument,
};
const documents: Documents = {
    "query GameFindMany {\n  gameFindMany {\n    id\n    index\n    user1 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    user2 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    scoreSet1User1\n    scoreSet1User2\n    scoreSet2User1\n    scoreSet2User2\n    scoreSet3User1\n    scoreSet3User2\n    winner\n  }\n}\n\nmutation GameCompleteOne($input: GameCompleteInput!) {\n  gameCompleteOne(input: $input)\n}": types.GameFindManyDocument,
    "query UserGetRanking {\n  userGetRanking {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}\n\nquery UserFindOne($input: UserFindOneInput!) {\n  userFindOne(input: $input) {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}": types.UserGetRankingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GameFindMany {\n  gameFindMany {\n    id\n    index\n    user1 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    user2 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    scoreSet1User1\n    scoreSet1User2\n    scoreSet2User1\n    scoreSet2User2\n    scoreSet3User1\n    scoreSet3User2\n    winner\n  }\n}\n\nmutation GameCompleteOne($input: GameCompleteInput!) {\n  gameCompleteOne(input: $input)\n}"): (typeof documents)["query GameFindMany {\n  gameFindMany {\n    id\n    index\n    user1 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    user2 {\n      id\n      firstName\n      lastName\n      rank\n    }\n    scoreSet1User1\n    scoreSet1User2\n    scoreSet2User1\n    scoreSet2User2\n    scoreSet3User1\n    scoreSet3User2\n    winner\n  }\n}\n\nmutation GameCompleteOne($input: GameCompleteInput!) {\n  gameCompleteOne(input: $input)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query UserGetRanking {\n  userGetRanking {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}\n\nquery UserFindOne($input: UserFindOneInput!) {\n  userFindOne(input: $input) {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}"): (typeof documents)["query UserGetRanking {\n  userGetRanking {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}\n\nquery UserFindOne($input: UserFindOneInput!) {\n  userFindOne(input: $input) {\n    id\n    rank\n    firstName\n    lastName\n    points\n    winsCount\n    lossesCount\n    wonSetsCount\n    lostSetsCount\n    wonPointsCount\n    lostPointsCount\n    games {\n      id\n      index\n      user1 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      user2 {\n        id\n        firstName\n        lastName\n        rank\n      }\n      scoreSet1User1\n      scoreSet1User2\n      scoreSet2User1\n      scoreSet2User2\n      scoreSet3User1\n      scoreSet3User2\n      winner\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;