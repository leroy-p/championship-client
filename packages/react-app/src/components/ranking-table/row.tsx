import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateRoutePath, RoutePath } from '../../app/router-config'
import { GameResult, GqlUser } from '../../types/types'
import { formatName, getUserStreak } from '../../utils/utils'
import Streak from './streak'

interface IProps {
  user: GqlUser
}

export default function Row({ user }: IProps) {
  return (
    <Container>
      <div className="table-cell main">
        <p className="rank">{user.rank}</p>
        <div className="pic-container">
          <img alt="" src={`/avatars/${formatName(user.firstName)}.png`} />
        </div>
        <Link className="name" to={generateRoutePath(RoutePath.PLAYER, { id: user.id })}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </Link>
      </div>
      <div className="table-cell pts">
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
  border-top: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
  display: flex;
  flex-direction: row;
  height: 56px;
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
    gap: 8px;
    justify-content: flex-start;
    padding-left: 16px;
    width: calc(100% - 7 * 32px - 96px);

    @media screen and (max-width: 632px) {
      width: calc(100% - 7 * 32px);
      padding-left: 8px;
    }

    .rank {
      color: ${({ theme }) => theme.palette.secondary};
      font-size: 16px;
      font-weight: bold;
      width: 20px;
    }

    .pic-container {
      border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
      border-radius: 50%;
      height: 40px;
      overflow: hidden;
      width: 40px;

      @media screen and (max-width: 632px) {
        display: none;
      }

      & > img {
        height: 100%;
        width: 100%;
      }
    }

    .name {
      font-size: 14px;
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 4px;
      justify-content: center;

      @media screen and (max-width: 632px) {
        align-items: flex-start;
        flex-direction: column;
      }

      & > p {
        font-size: 14px;
      }
    }
  }

  .table-cell.pts {
    & > p {
      color: ${({ theme }) => theme.palette.secondary};
      font-weight: bold;
    }
  }

  .table-cell.results {
    width: 96px;

    @media screen and (max-width: 632px) {
      display: none;
    }
  }
`
