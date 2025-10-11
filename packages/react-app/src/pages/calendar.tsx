import { useQuery } from '@apollo/client/react'
import { useState } from 'react'
import styled from 'styled-components'
import GameRow from '../components/calendar/game-row'
import UpdateGameDialog from '../components/calendar/update-game-dialog'
import Loader from '../components/loader'
import { GameFindManyDocument, GameFindManyQuery, GameFindManyQueryVariables } from '../graphql/generated/graphql'
import Layout from '../layout'
import { GqlGame } from '../types/types'

export default function Calendar() {
  const { data, loading, refetch } = useQuery<GameFindManyQuery, GameFindManyQueryVariables>(GameFindManyDocument, {
    variables: {},
  })
  const [index, setIndex] = useState<number>(1)
  const [selectedGame, setSelectedGame] = useState<GqlGame | undefined>(undefined)

  const games = data?.gameFindMany
  const maxIndex = games && games.length > 0 ? games[games.length - 1].index : 1

  return (
    <Layout>
      <Container>
        {loading && <Loader />}
        {games && (
          <>
            <div className="index-selector-container">
              <button onClick={() => setIndex((value) => Math.max(1, value - 1))}>
                <p>{'<'}</p>
              </button>
              <p>Journée {index}</p>
              <button onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}>{'>'}</button>
            </div>
            <div className="games-container">
              {[...games]
                .filter((game) => game.index === index)
                .map((game) => (
                  <GameRow
                    game={game}
                    key={`${game.user1.id}-${game.user2.id}`}
                    showUpdateDialog={() => setSelectedGame(game)}
                  />
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

  .index-selector-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 400px;

    & > button {
      align-items: center;
      display: flex;
      flex-direction: row;
      height: 24px;
      justify-content: center;
      width: 24px;
    }

    & > p {
      width: 96px;
      text-align: center;
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
