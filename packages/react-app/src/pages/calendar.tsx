import { useQuery } from '@apollo/client/react'
import { useState } from 'react'
import styled from 'styled-components'
import arrowIcon from '../assets/images/arrow.png'
import GameRow from '../components/calendar/game-row'
import UpdateGameDialog from '../components/calendar/update-game-dialog'
import Loader from '../components/loader'
import { GameFindManyDocument, GameFindManyQuery, GameFindManyQueryVariables } from '../graphql/generated/graphql'
import Layout from '../layout'
import { GqlGame } from '../types/types'

export default function Calendar() {
  const { data, loading, refetch } = useQuery<GameFindManyQuery, GameFindManyQueryVariables>(GameFindManyDocument, {})
  const [index, setIndex] = useState<number>(10)
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
              <button
                className={index === 1 ? 'arrow-button reversed hidden' : 'arrow-button reversed'}
                onClick={() => setIndex((value) => Math.max(1, value - 1))}
              >
                <img alt="" src={arrowIcon} />
              </button>
              <p>
                Journée <span>{index}</span>
              </p>
              <button
                className={index === maxIndex ? 'arrow-button hidden' : 'arrow-button'}
                onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}
              >
                <img alt="" src={arrowIcon} />
              </button>
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
    background-color: rgba(22, 22, 23, 0.20);
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
    border-radius: 32px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: row;
    height: 64px;
    justify-content: center;
    margin-bottom: 48px;
    width: 240px;

    @media screen and (max-width: 824px) {
      margin-bottom: 16px;
    }

    .arrow-button {
      height: 16px;
      width: 16px;

      &:hover {
        opacity: 0.7;
      }

      & > img {
        height: 100%;
        width: 100%;
      }
    }

    .arrow-button.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .arrow-button.reversed {
      & > img {
       transform: rotate(180deg);
      }
    }

    & > p {
      width: 128px;
      text-align: center;

      & > span {
        color: ${({ theme }) => theme.palette.secondary};
        font-weight: bold;
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
