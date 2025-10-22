import { useQuery } from '@apollo/client/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { APP_NAME } from '../app/page'
import GameRow from '../components/calendar/game-row'
import UpdateGameDialog from '../components/calendar/update-game-dialog'
import Loader from '../components/loader'
import Streak from '../components/ranking-table/streak'
import { UserFindOneDocument, UserFindOneQuery, UserFindOneQueryVariables } from '../graphql/generated/graphql'
import Layout from '../layout'
import { GqlUserGame } from '../types/types'
import { formatName } from '../utils/utils'

export default function Player() {
  const { id } = useParams()

  const { data, loading, refetch } = useQuery<UserFindOneQuery, UserFindOneQueryVariables>(UserFindOneDocument, {
    variables: {
      input: {
        id: Number.parseInt(id as string),
      },
    },
  })
  const [selectedGame, setSelectedGame] = useState<GqlUserGame | undefined>(undefined)

  useEffect(() => {
    if (!data?.userFindOne) return

    window.document.title = `${data?.userFindOne.firstName} ${data?.userFindOne.lastName} - ${APP_NAME}`
  }, [data])

  const user = data?.userFindOne

  return (
    <Layout>
      <Container>
        {loading && <Loader />}
        {user && (
          <>
            <div className="player-data-container">
              <div className="pic-container">
                <img alt="" src={`/avatars/${formatName(user.firstName)}.png`} />
              </div>
              <div className="main-container">
                <p className="name">{`${user.firstName} ${user.lastName}`}</p>
                <p className="rank">
                  Classement : <span>{user.rank}</span>
                </p>
                <Streak user={user} />
              </div>
              <div className="row-container">
                <div>
                  <p>
                    Victoires : <span>{user.winsCount}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Défaites : <span>{user.lossesCount}</span>
                  </p>
                </div>
              </div>
              <div className="row-container">
                <div>
                  <p>
                    Sets remportés : <span>{user.wonSetsCount}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Sets perdus : <span>{user.lostSetsCount}</span>
                  </p>
                </div>
              </div>
              <div className="row-container">
                <div>
                  <p>
                    Points remportés : <span>{user.wonPointsCount}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Points perdus : <span>{user.lostPointsCount}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="games-container">
              {user.games.map((game) => (
                <GameRow game={game} key={game.index} showUpdateDialog={() => setSelectedGame(game)} />
              ))}
            </div>
            <UpdateGameDialog close={() => setSelectedGame(undefined)} game={selectedGame} refetch={refetch} />
          </>
        )}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  padding-top: 48px;
  width: 100%;

  @media screen and (max-width: 824px) {
    padding-top: 32px;
  }

  .player-data-container {
    align-items: center;
    background-color: rgba(22, 22, 23, 0.20);
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
    border-radius: 36px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 48px;
    position: relative;
    width: 480px;

    @media screen and (max-width: 824px) {
      margin-bottom: 16px;
      width: 100%;
    }

    .pic-container {
      border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
      background-color: ${({ theme }) => theme.palette.dark};
      border-radius: 50%;
      height: 128px;
      left: calc(50% - 64px);
      overflow: hidden;
      position: absolute;
      top: -64px;
      width: 128px;

      @media screen and (max-width: 824px) {
        height: 80px;
        left: calc(50% - 40px);
        position: absolute;
        top: -40px;
        width: 80px;
      }

      & > img {
        height: 100%;
        width: 100%;
      }
    }

    .main-container {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 72px 16px 16px 16px;
      justify-content: flex-start;
      width: 100%;

      @media screen and (max-width: 824px) {
        padding: 48px 16px 16px 16px;
      }

      .name {
        font-size: 24px;
      }

      .rank {
        font-size: 16px;

        & > span {
          color: ${({ theme }) => theme.palette.secondary};
          font-weight: bold;
        }
      }
    }

    .row-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;

      & > div {
        border-top: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
        border-right: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 8px;
        width: 50%;

        & > p {
          font-size: 16px;

          @media screen and (max-width: 824px) {
            font-size: 12px;
          }

          & > span {
            color: ${({ theme }) => theme.palette.secondary};
            font-weight: bold;
          }
        }
      }

      & > div:nth-last-child(1) {
        border-right: none;
      }
    }
  }

  .games-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`
