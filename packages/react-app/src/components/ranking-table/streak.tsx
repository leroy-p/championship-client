import styled from 'styled-components'
import { GameResult, GqlUser } from '../../types/types'
import { getUserStreak } from '../../utils/utils'

interface IProps {
  user: GqlUser
}

export default function Streak({ user }: IProps) {
  const streak = getUserStreak(user)

  return (
    <Container>
      {streak.map((result, index) => (
        <div className={result === GameResult.VICTORY ? 'game-result victory' : 'game-result defeat'} key={index} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  width: 100%;

  .game-result {
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  .game-result.victory {
    background-color: ${({ theme }) => theme.palette.win};
  }

  .game-result.defeat {
    background-color: ${({ theme }) => theme.palette.lose};
  }
`
