import React from 'react'
import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import background from '../assets/images/background.png'
import Footer from './footer'
import GlobalTooltip from './global-tooltip'
import Header from './header'
import Main from './main'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <GlobalTooltip />
    </Container>
  )
}

const Container = styled(Div100vh)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
`
