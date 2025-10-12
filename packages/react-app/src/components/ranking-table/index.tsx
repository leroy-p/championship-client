import styled from 'styled-components'
import { UserGetRankingQuery } from '../../graphql/generated/graphql'
import { GqlUser } from '../../types/types'
import Head from './head'
import Row from './row'

interface IProps {
  users: GqlUser[]
}

export default function RankingTable({ users }: IProps) {
  return (
    <Container>
      <Head />
      {users.map((user) => (
        <Row key={user.lastName} user={user} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background: rgba(22, 22, 23, 0.20);
  border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
  border-radius: 24px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 800px;

  @media screen and (max-width: 632px) {
    width: 100%;
  }

  .table-head {
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
        .win {
          color: ${({ theme }) => theme.palette.win};
        }

        .lose {
          color: ${({ theme }) => theme.palette.lose};
          margin-left: 4px;
        }
      }
    }
  }
`
