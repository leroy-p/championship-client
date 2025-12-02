import styled from 'styled-components'
import editIcon from '../../assets/images/edit.png'
import { GqlUserGame } from '../../types/types'
import SetScore from './set-score'

interface IProps {
  game: GqlUserGame
  defeat?: boolean
}

export default function GameScore({ game, defeat }: IProps) {
  return (
    <Container $empty={!game.winner}>
      {game.winner ? (
        <>
          <SetScore defeat={defeat} score1={game.scoreSet1User1} score2={game.scoreSet1User2} />
          <SetScore defeat={defeat} score1={game.scoreSet2User1} score2={game.scoreSet2User2} />
          <SetScore defeat={defeat} score1={game.scoreSet3User1} score2={game.scoreSet3User2} />
        </>
      ) : (
        <img alt="" src={editIcon} />
      )}
    </Container>
  )
}

const Container = styled.div<{ $empty?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  padding: ${({ $empty }) => ($empty ? '0 4px' : '0 16px')};

  & > img {
    height: 24px;
    width: 24px;
  }
`
