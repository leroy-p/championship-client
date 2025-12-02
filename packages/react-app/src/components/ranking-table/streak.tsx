import styled from 'styled-components'
import { GameResult, GqlUser, IGameResult } from '../../types/types'
import { getUserStreak } from '../../utils/utils'
import { useContext } from 'react'
import { TooltipContext } from '../../context/tooltip'
import { TooltipPosition, TooltipType } from '../../types/tooltips'

interface IProps {
  user: GqlUser
}

export default function Streak({ user }: IProps) {
  const { setTooltipProps } = useContext(TooltipContext)

  function showTooltip(event: React.MouseEvent<HTMLElement, MouseEvent>, gameResult: IGameResult) {
    const rect = event.currentTarget.getBoundingClientRect()

    setTooltipProps({
      common: {
        rect,
        position: TooltipPosition.TOP,
      },
      custom: {
        type: TooltipType.GAME,
        gameResult,
      },
    })
  }

  const streak = getUserStreak(user)

  return (
    <Container>
      {streak.map((gameResult, index) => (
        <div
          className={gameResult.result === GameResult.VICTORY ? 'game-result victory' : 'game-result defeat'}
          key={index}
          onMouseEnter={(event) => showTooltip(event, gameResult)}
          onMouseLeave={() => setTooltipProps(undefined)}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  width: 100%;

  .game-result {
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  .game-result.victory {
    background-color: ${({ theme }) => theme.palette.win};
  }

  .game-result.defeat {
    background-color: ${({ theme }) => theme.palette.lose};
  }
`
