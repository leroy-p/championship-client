import { useMutation, useQuery } from '@apollo/client/react'
import styled from 'styled-components'
import Loader from '../components/loader'
import RankingTable from '../components/ranking-table'
import {
  GameCompleteOneDocument,
  GameCompleteOneMutation,
  GameCompleteOneMutationVariables,
  UserGetRankingDocument,
  UserGetRankingQuery,
  UserGetRankingQueryVariables,
} from '../graphql/generated/graphql'
import Layout from '../layout'

export default function Ranking() {
  const { data, loading } = useQuery<UserGetRankingQuery, UserGetRankingQueryVariables>(UserGetRankingDocument, {
    variables: {},
  })

  return (
    <Layout>
      <Container>
        {loading && <Loader />}
        {data?.userGetRanking && <RankingTable users={data.userGetRanking} />}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;

  & > h6 {
    font-size: 48px;
  }

  & > p {
    font-size: 24px;
  }

  & > img {
    height: 72px;
    width: auto;
  }
`
