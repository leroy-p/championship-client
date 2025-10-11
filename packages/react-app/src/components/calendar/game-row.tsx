import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateRoutePath, RoutePath } from '../../app/router-config'
import { GqlGame, GqlUserGame } from '../../types/types'
import GameScore from './game-score'

interface IProps {
  game: GqlGame | GqlUserGame
  showUpdateDialog: () => void
}

export default function GameRow({ game, showUpdateDialog }: IProps) {
  return (
    <Container>
      <div className={game.winner === 1 ? 'player-container winner left' : 'player-container left'}>
        <Link
          className="name"
          to={generateRoutePath(RoutePath.PLAYER, { id: game.user1.id })}
        >{`${game.user1.firstName} ${game.user1.lastName}`}</Link>
        <p>{`(${game.user1.rank})`}</p>
      </div>
      <div className="score-container" onClick={showUpdateDialog}>
        <GameScore game={game} />
      </div>
      <div className={game.winner === 2 ? 'player-container winner right' : 'player-container right'}>
        <p>{`(${game.user2.rank})`}</p>
        <Link
          className="name"
          to={generateRoutePath(RoutePath.PLAYER, { id: game.user2.id })}
        >{`${game.user2.firstName} ${game.user2.lastName}`}</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  border: ${({ theme }) => `solid 1px ${theme.palette.text}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  width: 800px;

  .player-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
    width: calc(50% - 100px);
  }

  .player-container.winner {
    & > p, & > a {
      font-weight: bold;
    }
  }

  .player-container.left {
    justify-content: flex-start;
  }

  .player-container.right {
    justify-content: flex-end;
  }

  .score-container {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200px;
  }
`
