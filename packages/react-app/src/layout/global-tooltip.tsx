import { useContext } from 'react'
import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import Game from '../components/tooltip/game'
import Simple from '../components/tooltip/simple'
import { TooltipContext } from '../context/tooltip'
import { TooltipPosition, TooltipType } from '../types/tooltips'

export default function GlobalTooltip() {
  const { tooltipProps } = useContext(TooltipContext)

  return (
    <Container $visible={Boolean(tooltipProps)}>
      {tooltipProps && (
        <TooltipContainer $position={tooltipProps.common.position} $rect={tooltipProps.common.rect}>
          <div className="main-container global-tooltip">
            <>
              {tooltipProps.custom.type === TooltipType.SIMPLE && <Simple message={tooltipProps.custom.message} />}
              {tooltipProps.custom.type === TooltipType.GAME && <Game gameResult={tooltipProps.custom.gameResult} />}
            </>
          </div>
          <div className="decorator" />
        </TooltipContainer>
      )}
    </Container>
  )
}

const Container = styled(Div100vh)<{ $visible?: boolean }>`
  left: 0;
  position: fixed;
  top: 0;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  pointer-events: none;
  transition: opacity 200ms ease-in-out;
  width: 100vw;
  z-index: 100;

  @media screen and (max-width: 824px) {
    align-items: center;
    background-color: #0d0a0f30;
    display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
  }
`

const TooltipContainer = styled.div<{
  $rect: DOMRect
  $position?: TooltipPosition
  $pointer?: boolean
}>`
  align-items: ${({ $position }) => {
    if ($position === TooltipPosition.LEFT) return 'flex-end'
    if ($position === TooltipPosition.RIGHT) return `flex-start`

    return 'center'
  }};
  bottom: ${({ $rect, $position }) => ($position === TooltipPosition.TOP ? `calc(100% - ${$rect.top}px + 16px)` : 'auto')};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: ${({ $position }) => {
    if ($position === TooltipPosition.TOP) return 'flex-end'
    if ($position === TooltipPosition.BOTTOM) return `flex-start`

    return 'center'
  }};
  left: ${({ $rect, $position }) => {
    if ($position === TooltipPosition.LEFT) return 'auto'
    if ($position === TooltipPosition.RIGHT) return `${$rect.left + $rect.width + 16}px`

    return `${$rect.left + ($rect.width - 400) / 2}px`
  }};
  position: absolute;
  right: ${({ $rect, $position }) => ($position === TooltipPosition.LEFT ? `calc(100% - ${$rect.left}px + 16px)` : 'auto')};
  top: ${({ $rect, $position }) => {
    if ($position === TooltipPosition.TOP) return 'auto'
    if ($position === TooltipPosition.BOTTOM) return `${$rect.top + $rect.height + 16}px`

    return `${$rect.top + ($rect.height - 400) / 2}px`
  }};
  width: 400px;
  pointer-events: ${({ $pointer }) => ($pointer ? 'auto' : 'none')};
  gap: 8px;

  @media screen and (max-width: 824px) {
    align-items: center;
    bottom: auto;
    justify-content: center;
    left: auto;
    position: relative;
    right: auto;
    top: auto;
  }

  .main-container {
    background-color: ${({ theme }) => theme.palette.dark};
    border-radius: 6px;
    padding: 12px;

    .message {
      font-size: 16px;
      max-width: 200px;
      text-align: left;
    }
  }

  .decorator {
    background-color: ${({ theme }) => theme.palette.dark};
    bottom: ${({ $position }) => ($position === TooltipPosition.TOP ? '-6px' : 'auto')};
    height: 12px;
    left: ${({ $position }) => {
      if ($position === TooltipPosition.LEFT) return 'auto'
      if ($position === TooltipPosition.RIGHT) return '-6px'

      return 'calc(50% - 6px)'
    }};
    position: absolute;
    right: ${({ $position }) => ($position === TooltipPosition.LEFT ? '-6px' : 'auto')};
    top: ${({ $position }) => {
      if ($position === TooltipPosition.TOP) return 'auto'
      if ($position === TooltipPosition.BOTTOM) return '-6px'

      return 'calc(50% - 6px)'
    }};
    transform: rotate(45deg);
    width: 12px;

    @media screen and (max-width: 824px) {
      display: none;
    }
  }
`
