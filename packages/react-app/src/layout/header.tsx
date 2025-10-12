import { Link, useLocation } from 'react-router'
import styled from 'styled-components'
import { APP_NAME } from '../app/page'
import { generateRoutePath, RoutePath } from '../app/router-config'
import logo from '../assets/images/logo.png'

export default function Header() {
  const location = useLocation()

  return (
    <Container>
      <Link to={generateRoutePath(RoutePath.RANKING, {})} className="title-container">
        <img alt="" src={logo} />
        <p>
          Cr<span>o</span>ss The Aces
        </p>
      </Link>
      <div className="links-container">
        <Link
          className={location.pathname.includes(RoutePath.RANKING) ? 'selected' : ''}
          to={generateRoutePath(RoutePath.RANKING, {})}
        >
          <p>Classement</p>
          <div />
        </Link>
        <Link
          className={location.pathname.includes(RoutePath.CALENDAR) ? 'selected' : ''}
          to={generateRoutePath(RoutePath.CALENDAR, {})}
        >
          <p>Calendrier</p>
          <div />
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.dark};
  border-bottom: 1px solid #262626;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  padding: 0 0 0 24px;
  width: 100%;

  @media screen and (max-width: 824px) {
    padding: 0 0 0 16px;
  }

  .title-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;

    &:hover {
      opacity: 1;
    }

    & > img {
      height: 24px;
      width: 24px;
    }

    & > p {
      font-size: 22px;

      @media screen and (max-width: 824px) {
        display: none;
      }

      & > span {
        color: ${({ theme }) => theme.palette.secondary};
      }
    }
  }

  .links-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-end;

    & > a {
      align-items: center;
      display: flex;
      flex-direction: row;
      height: 100%;
      justify-content: center;
      position: relative;
      width: 128px;


      & > div {
        background-color: ${({ theme }) => theme.palette.secondary};
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
      }

      &:hover {
        background: linear-gradient(180deg, rgba(64, 255, 255, 0.00) 66.41%, rgba(64, 255, 255, 0.20) 100%);
        opacity: 1;

        & > p {
          color: ${({ theme }) => theme.palette.secondary};
        }

        & > div {
          opacity: 1;
        }
      }
    }

    .selected {
      background: linear-gradient(180deg, rgba(64, 255, 255, 0.00) 66.41%, rgba(64, 255, 255, 0.20) 100%);

      & > p {
        color: ${({ theme }) => theme.palette.secondary};
      }

      & > div {
        opacity: 1;
      }
    }
  }
`
