import styled from 'styled-components'

interface IProps {
  score1: number | null | undefined
  score2: number | null | undefined
  defeat?: boolean
}

export default function SetScore({ score1, score2, defeat }: IProps) {
  return (
    <Container $defeat={defeat}>
      {score1 !== undefined && score2 !== undefined && score1 !== null && score2 !== null && (
        <p>
          <span className={score1 > score2 ? 'strong' : ''}>{score1}</span>/
          <span className={score2 > score1 ? 'strong' : ''}>{score2}</span>
        </p>
      )}
    </Container>
  )
}

const Container = styled.div<{ $defeat?: boolean }>`
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
      color: ${({ theme, $defeat }) => ($defeat ? theme.palette.lose : theme.palette.secondary)};
      font-weight: bold;
    }
  }
`
