import styled from 'styled-components'
import { GqlUserGame } from '../../types/types'
import SetScore from './set-score'

interface IProps {
  game: GqlUserGame
}

export default function GameScore({ game }: IProps) {
  return (
    <Container>
      {game.winner ? (
        <>
          <SetScore score1={game.scoreSet1User1} score2={game.scoreSet1User2} />
          <SetScore score1={game.scoreSet2User1} score2={game.scoreSet2User2} />
          <SetScore score1={game.scoreSet3User1} score2={game.scoreSet3User2} />
        </>
      ) : (
        <p>-</p>
      )}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
`
