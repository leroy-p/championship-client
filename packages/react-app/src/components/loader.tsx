import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

export default function Loader() {
  return (
    <Container>
      <p>Chargement...</p>
    </Container>
  )
}

const Container = styled(Div100vh)`
  align-items: center;
  background-color: #00000080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
`
