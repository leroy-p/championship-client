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
        <div className="pic-container">{/* <img alt="" src={} /> */}</div>
        <Link
          className="name"
          to={generateRoutePath(RoutePath.PLAYER, { id: game.user1.id })}
        >{`${game.user1.firstName} ${game.user1.lastName}`}</Link>
        <p className="rank">{`(${game.user1.rank})`}</p>
      </div>
      <div className="score-container">
        <button className="score-button" onClick={showUpdateDialog}>
          <GameScore game={game} />
        </button>
      </div>
      <div className={game.winner === 2 ? 'player-container winner right' : 'player-container right'}>
        <p className="rank">{`(${game.user2.rank})`}</p>
        <Link
          className="name"
          to={generateRoutePath(RoutePath.PLAYER, { id: game.user2.id })}
        >{`${game.user2.firstName} ${game.user2.lastName}`}</Link>
        <div className="pic-container">{/* <img alt="" src={} /> */}</div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  background-color: rgba(22, 22, 23, 0.20);
  border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
  border-radius: 36px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  height: 72px;
  justify-content: space-between;
  padding: 16px;
  width: 800px;

  @media screen and (max-width: 824px) {
    width: 100%;
  }

  .player-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
    width: calc(50% - 100px);

    .name {
      font-size: 16px;

      @media screen and (max-width: 824px) {
        font-size: 12px;
      }
    }

    .pic-container {
      border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
      border-radius: 50%;
      height: 40px;
      width: 40px;

      @media screen and (max-width: 824px) {
        display: none;
      }
    }

    .rank {
      color: ${({ theme }) => theme.palette.secondary};
      font-weight: bold;

      @media screen and (max-width: 824px) {
        display: none;
      }
    }
  }

  .player-container.winner {
    & > p, & > a {
      font-weight: bold;
    }
  }

  .player-container.left {
    justify-content: flex-start;

    .name {
      margin-left: 4px;
    }
  }

  .player-container.right {
    justify-content: flex-end;

    .name {
      margin-right: 4px;
      text-align: right;
    }
  }

  .score-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 160px;
  }

  .score-button {
    align-items: center;
    background-color: ${({ theme }) => theme.palette.dark};
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
    border-radius: 16px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(19.512195587158203px);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 32px;
    justify-content: center;
    transition: all 200ms ease-in-out;

    &:hover {
      box-shadow: 0 0 10px 0 rgba(64, 255, 255, 0.50);
    }
  }
`
