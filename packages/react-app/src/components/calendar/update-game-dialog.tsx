import { useMutation } from '@apollo/client/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  GameCompleteOneDocument,
  GameCompleteOneMutation,
  GameCompleteOneMutationVariables,
} from '../../graphql/generated/graphql'
import { GqlGame, GqlUserGame } from '../../types/types'
import Dialog from '../dialog'
import Loader from '../loader'

interface IProps {
  game?: GqlGame | GqlUserGame
  refetch: () => Promise<any>
  close: () => void
}

export default function UpdateGameDialog({ game, refetch, close }: IProps) {
  const [completeGame, { loading }] = useMutation<GameCompleteOneMutation, GameCompleteOneMutationVariables>(
    GameCompleteOneDocument,
  )
  const [scoreSet1User1, setScoreSet1User1] = useState<number>(-1)
  const [scoreSet1User2, setScoreSet1User2] = useState<number>(-1)
  const [scoreSet2User1, setScoreSet2User1] = useState<number>(-1)
  const [scoreSet2User2, setScoreSet2User2] = useState<number>(-1)
  const [scoreSet3User1, setScoreSet3User1] = useState<number>(-1)
  const [scoreSet3User2, setScoreSet3User2] = useState<number>(-1)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  useEffect(() => {
    setScoreSet1User1(game?.scoreSet1User1 || -1)
    setScoreSet1User2(game?.scoreSet1User2 || -1)
    setScoreSet2User1(game?.scoreSet2User1 || -1)
    setScoreSet2User2(game?.scoreSet2User2 || -1)
    setScoreSet3User1(game?.scoreSet3User1 || -1)
    setScoreSet3User2(game?.scoreSet3User2 || -1)
  }, [game])

  useEffect(() => {
    setErrorMessage(undefined)
  }, [scoreSet1User1, scoreSet1User2, scoreSet2User1, scoreSet2User2, scoreSet3User1, scoreSet3User2])

  function onClose() {
    close()
  }

  async function submit() {
    if (!game) return

    if (scoreSet1User1 === -1 || scoreSet1User2 === -1 || scoreSet1User1 === scoreSet1User2) {
      console.log('2')
      setErrorMessage('Score invalide.')

      return
    }

    if (scoreSet2User1 === -1 || scoreSet2User2 === -1 || scoreSet2User1 === scoreSet2User2) {
      console.log('2')
      setErrorMessage('Score invalide.')

      return
    }

    let setScore1 = 0
    let setScore2 = 0

    if (scoreSet1User1 > scoreSet1User2) setScore1 += 1
    else setScore2 += 1

    if (scoreSet2User1 > scoreSet2User2) setScore1 += 1
    else setScore2 += 1

    if (setScore1 !== setScore2 && (scoreSet3User1 !== -1 || scoreSet3User2 !== -1)) {
      console.log('3')
      setErrorMessage('Score invalide.')

      return
    }

    if (
      setScore1 === setScore2 &&
      (scoreSet3User1 === -1 || scoreSet3User2 === -1 || scoreSet3User1 === scoreSet3User2)
    ) {
      console.log('4')
      setErrorMessage('Score invalide.')

      return
    }

    await completeGame({
      variables: {
        input: {
          id: game.id,
          scoreSet1User1,
          scoreSet1User2,
          scoreSet2User1,
          scoreSet2User2,
          scoreSet3User1: scoreSet3User1 === -1 ? undefined : scoreSet3User1,
          scoreSet3User2: scoreSet3User2 === -1 ? undefined : scoreSet3User2,
        },
      },
    })
    await refetch()

    setErrorMessage(undefined)
    close()
  }

  if (!game) return <></>

  return (
    <Dialog close={onClose} visible={Boolean(game)}>
      <Container>
        {loading && <Loader />}
        <p className="title">Mise à jour du match</p>
        <div className="main-container">
          <div className="form-container">
            <div className="names-container">
              <p className="name-left">{`${game.user1.firstName} ${game.user1.lastName}`}</p>
              <p className="label">vs</p>
              <p className="name-right">{`${game.user2.firstName} ${game.user2.lastName}`}</p>
            </div>
            <div className="row-container">
              <input
                onChange={(event) => setScoreSet1User1(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet1User1 === -1 ? '' : scoreSet1User1}
              />
              <p className="label">set 1</p>
              <input
                onChange={(event) => setScoreSet1User2(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet1User2 === -1 ? '' : scoreSet1User2}
              />
            </div>
            <div className="row-container">
              <input
                onChange={(event) => setScoreSet2User1(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet2User1 === -1 ? '' : scoreSet2User1}
              />
              <p className="label">set 2</p>
              <input
                onChange={(event) => setScoreSet2User2(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet2User2 === -1 ? '' : scoreSet2User2}
              />
            </div>
            <div className="row-container">
              <input
                onChange={(event) => setScoreSet3User1(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet3User1 === -1 ? '' : scoreSet3User1}
              />
              <p className="label">set 3</p>
              <input
                onChange={(event) => setScoreSet3User2(Number.parseInt(event.target.value))}
                type="number"
                value={scoreSet3User2 === -1 ? '' : scoreSet3User2}
              />
            </div>
          </div>
        </div>
        <button onClick={submit}>Valider</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </Container>
    </Dialog>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding: 24px;
  width: 600px;

  .title {
    text-align: center;
  }

  .main-container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .form-container {
      align-items: center;
      display: flex;
      gap: 16px;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;

      .names-container {
        align-items: center;
        display: flex;
        gap: 8px;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;

        .name-left {
          text-align: right;
          width: calc(50% - 32px);
        }

        .name-right {
          text-align: left;
          width: calc(50% - 32px);
        }

        .label {
          width: 64px;
          text-align: center;
        }
      }

      .row-container {
        align-items: center;
        display: flex;
        gap: 8px;
        flex-direction: row;
        justify-content: center;

        .label {
          text-align: center;
          width: 64px;
        }

        & > input {
          background-color: transparent;
          border: ${({ theme }) => `solid 1px ${theme.palette.text}`};
          height: 24px;
          width: 24px;
          text-align: center;
        }
      }
    }
  }

  & > button {
    border: ${({ theme }) => `solid 1px ${theme.palette.text}`};
    height: 24px;
    padding: 0 8px;
  }
`
