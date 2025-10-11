import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateRoutePath, RoutePath } from '../../app/router-config'
import { GameResult, GqlUser } from '../../types/types'
import { getUserStreak } from '../../utils/utils'
import Streak from './streak'

interface IProps {
  user: GqlUser
}

export default function Row({ user }: IProps) {
  return (
    <Container>
      <div className="table-cell main">
        <p>
          <span className="rank">{user.rank}</span>
          <Link
            className="name"
            to={generateRoutePath(RoutePath.PLAYER, { id: user.id })}
          >{`${user.firstName} ${user.lastName}`}</Link>
        </p>
      </div>
      <div className="table-cell">
        <p>{user.points}</p>
      </div>
      <div className="table-cell">
        <p>{user.winsCount + user.lossesCount}</p>
      </div>
      <div className="table-cell">
        <p>{user.winsCount}</p>
      </div>
      <div className="table-cell">
        <p>{user.lossesCount}</p>
      </div>
      <div className="table-cell">
        <p>{user.wonSetsCount}</p>
      </div>
      <div className="table-cell">
        <p>{user.lostSetsCount}</p>
      </div>
      <div className="table-cell">
        <p>{user.wonSetsCount - user.lostSetsCount}</p>
      </div>
      <div className="table-cell results">
        <Streak user={user} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  border-top: ${({ theme }) => `solid 1px ${theme.palette.text}`};
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  width: 100%;

  .table-cell {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    width: 32px;

    & > p {
      font-size: 14px;
    }
  }

  .table-cell.main {
    justify-content: flex-start;
    padding-left: 8px;
    width: calc(100% - 7 * 32px - 96px);

    & > p {
      .name {
        margin-left: 8px;
      }
    }
  }

  .table-cell.results {
    gap: 2px;
    width: 96px;

    .game-result {
      border-radius: 50%;
      height: 16px;
      width: 16px;
    }

    .game-result.victory {
      background-color: ${({ theme }) => theme.palette.win};
    }

    .game-result.defeat {
      background-color: ${({ theme }) => theme.palette.lose};
    }
  }
`
