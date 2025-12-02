import styled from 'styled-components'
import { GameResult, IGameResult } from '../../types/types'
import GameScore from '../calendar/game-score'

interface IProps {
  gameResult: IGameResult
}

export default function Game({ gameResult }: IProps) {
  return (
    <Container>
      <p>
        <span className={gameResult.result.toLowerCase()}>
          {gameResult.result === GameResult.VICTORY ? 'Victoire' : 'Défaite'}
        </span>
        vs
        <span className="opponent">{gameResult.opponentName}</span>
      </p>
      <GameScore defeat={gameResult.result === GameResult.DEFEAT} game={gameResult.game} />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > p {
    font-size: 16px;

    .victory {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.win};
      padding-right: 4px;
    }

    .defeat {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.lose};
      padding-right: 4px;
    }

    .opponent {
      font-weight: bold;
      padding-left: 4px;
    }
  }
`
