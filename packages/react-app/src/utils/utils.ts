import { GameResult, GqlUser } from '../types/types'

export async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

export function getUserStreak(user: GqlUser): GameResult[] {
  const result: GameResult[] = []

  for (const game of user.games) {
    if (
      game.winner &&
      ((game.user1.id === user.id && game.winner === 1) || (game.user2.id === user.id && game.winner === 2))
    ) {
      result.push(GameResult.VICTORY)
    }

    if (
      game.winner &&
      ((game.user1.id === user.id && game.winner === 2) || (game.user2.id === user.id && game.winner === 1))
    ) {
      result.push(GameResult.DEFEAT)
    }
  }

  return result.reverse().slice(0, 5).reverse()
}

export function formatName(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
