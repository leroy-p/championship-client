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
              <p className="name">{`${user.firstName} ${user.lastName}`}</p>
              <p className="rank">Classement : {user.rank}</p>
              <Streak user={user} />
              <div className="row-container">
                <p>Victoires : {user.winsCount}</p>
                <p>Défaites : {user.lossesCount}</p>
              </div>
              <div className="row-container">
                <p>Sets remportés : {user.wonSetsCount}</p>
                <p>Sets perdus : {user.lostSetsCount}</p>
              </div>
              <div className="row-container">
                <p>Points remportés : {user.wonPointsCount}</p>
                <p>Points perdus : {user.lostPointsCount}</p>
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
  width: 100%;

  .player-data-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    width: 100%;

    .row-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: center;
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
