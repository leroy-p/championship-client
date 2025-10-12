import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

export default function Loader() {
  return (
    <Container>
      <div>
        <img alt="" src={logo} />
      </div>
    </Container>
  )
}

const Container = styled(Div100vh)`
  align-items: center;
  background: rgba(33, 33, 34, 0.60);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;

  & > div {
    height: 64px;
    transform: rotate(-45deg);
    width: 64px;

    & > img {
      animation: loaderAnimation 1.5s infinite ease-in-out;
      height: 100%;
      width: 100%;
    }
  }

  @keyframes loaderAnimation {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
`
