import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateRoutePath, RoutePath } from '../../app/router-config'
import { GqlUserGame } from '../../types/types'

interface IProps {
  score1: number | null | undefined
  score2: number | null | undefined
}

export default function SetScore({ score1, score2 }: IProps) {
  return (
    <Container>
      {score1 !== undefined && score2 !== undefined && score1 !== null && score2 !== null && (
        <p>
          <span className={score1 > score2 ? 'strong' : ''}>{score1}</span>/
          <span className={score2 > score1 ? 'strong' : ''}>{score2}</span>
        </p>
      )}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > p {
    font-size: 16px;

    @media screen and (max-width: 824px) {
      font-size: 12px;
    }

    .strong {
      color: ${({ theme }) => theme.palette.secondary};
      font-weight: bold;
    }
  }
`
