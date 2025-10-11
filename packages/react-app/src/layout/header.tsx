import { Link, useLocation } from 'react-router'
import styled from 'styled-components'
import { APP_NAME } from '../app/page'
import { generateRoutePath, RoutePath } from '../app/router-config'

export default function Header() {
  const location = useLocation()

  return (
    <Container>
      <p>{APP_NAME}</p>
      <div className="links-container">
        <Link
          className={location.pathname.includes(RoutePath.RANKING) ? 'selected' : ''}
          to={generateRoutePath(RoutePath.RANKING, {})}
        >
          Classement
        </Link>
        <p>|</p>
        <Link
          className={location.pathname.includes(RoutePath.CALENDAR) ? 'selected' : ''}
          to={generateRoutePath(RoutePath.CALENDAR, {})}
        >
          Calendrier
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 48px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;

  & > p {
    font-size: 24px;
  }

  .links-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
    height: 48px;
    justify-content: space-between;

    .selected {
      font-weight: bold;
    }
  }
`
