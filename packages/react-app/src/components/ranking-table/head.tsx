import styled from 'styled-components'

export default function Head() {
  return (
    <Container>
      <div className="table-cell main" />
      <div className="table-cell pts">
        <p>pts</p>
      </div>
      <div className="table-cell">
        <p>J.</p>
      </div>
      <div className="table-cell">
        <p>G.</p>
      </div>
      <div className="table-cell">
        <p>P.</p>
      </div>
      <div className="table-cell">
        <p>p.</p>
      </div>
      <div className="table-cell">
        <p>c.</p>
      </div>
      <div className="table-cell">
        <p>+/-</p>
      </div>
      <div className="table-cell results">
        <p>
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
