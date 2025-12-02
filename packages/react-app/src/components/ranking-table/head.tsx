import { useContext } from 'react'
import styled from 'styled-components'
import { TooltipContext } from '../../context/tooltip'
import { TooltipPosition, TooltipType } from '../../types/tooltips'

export default function Head() {
  const { setTooltipProps } = useContext(TooltipContext)

  function showTooltip(event: React.MouseEvent<HTMLElement, MouseEvent>, message: string) {
    const rect = event.currentTarget.getBoundingClientRect()

    setTooltipProps({
      common: {
        rect,
        position: TooltipPosition.BOTTOM,
      },
      custom: {
        type: TooltipType.SIMPLE,
        message,
      },
    })
  }

  return (
    <Container>
      <div className="table-cell main" />
      <div className="table-cell pts">
        <p onMouseEnter={(event) => showTooltip(event, 'Points')} onMouseLeave={() => setTooltipProps(undefined)}>
          pts
        </p>
      </div>
      <div className="table-cell">
        <p onMouseEnter={(event) => showTooltip(event, 'Match joués')} onMouseLeave={() => setTooltipProps(undefined)}>
          J.
        </p>
      </div>
      <div className="table-cell">
        <p
          onMouseEnter={(event) => showTooltip(event, 'Matchs gagnés')}
          onMouseLeave={() => setTooltipProps(undefined)}
        >
          G.
        </p>
      </div>
      <div className="table-cell">
        <p
          onMouseEnter={(event) => showTooltip(event, 'Matchs perdus')}
          onMouseLeave={() => setTooltipProps(undefined)}
        >
          P.
        </p>
      </div>
      <div className="table-cell">
        <p onMouseEnter={(event) => showTooltip(event, 'Sets pour')} onMouseLeave={() => setTooltipProps(undefined)}>
          p.
        </p>
      </div>
      <div className="table-cell">
        <p onMouseEnter={(event) => showTooltip(event, 'Sets contres')} onMouseLeave={() => setTooltipProps(undefined)}>
          c.
        </p>
      </div>
      <div className="table-cell">
        <p onMouseEnter={(event) => showTooltip(event, 'Set-average')} onMouseLeave={() => setTooltipProps(undefined)}>
          +/-
        </p>
      </div>
      <div className="table-cell results">
        <p
          onMouseEnter={(event) => showTooltip(event, 'Gagnés/Perdus')}
          onMouseLeave={() => setTooltipProps(undefined)}
        >
          <span className="victory">G.</span>
          <span className="defeat">P.</span>
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
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

  .table-cell.pts > p {
    color: ${({ theme }) => theme.palette.secondary};
    font-weight: bold;
  }

  .table-cell.main {
    width: calc(100% - 7 * 32px - 96px);

    @media screen and (max-width: 632px) {
      width: calc(100% - 7 * 32px);
    }
  }

  .table-cell.results {
    width: 96px;

    @media screen and (max-width: 632px) {
      display: none;
    }

    & > p {
      font-weight: bold;

      .victory {
        color: ${({ theme }) => theme.palette.win};
      }

      .defeat {
        color: ${({ theme }) => theme.palette.lose};
        margin-left: 4px;
      }
    }
  }
`
