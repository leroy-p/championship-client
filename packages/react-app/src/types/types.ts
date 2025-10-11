import { GameFindManyQuery, UserFindOneQuery, UserGetRankingQuery } from '../graphql/generated/graphql'

export type GqlUser = NonNullable<UserGetRankingQuery['userGetRanking'][0] | UserFindOneQuery['userFindOne']>
export type GqlUserGame = GqlUser['games'][0]
export type GqlGame = NonNullable<GameFindManyQuery['gameFindMany']>[0]

export enum GameResult {
  VICTORY = 'VICTORY',
  DEFEAT = 'DEFEAT',
}
