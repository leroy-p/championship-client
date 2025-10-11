import styled from 'styled-components'

export default function Head() {
  return (
    <Container>
      <div className="table-cell main" />
      <div className="table-cell">
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

  .table-cell.main {
    width: calc(100% - 7 * 32px - 96px);
  }

  .table-cell.results {
    width: 96px;

    & > p {
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
