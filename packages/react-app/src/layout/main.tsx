import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
}

export default function Main({ children }: IProps) {
  return <Container>{children}</Container>
}

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
  justify-content: flex-start;
  overflow-y: auto;
  padding: 48px;
  width: 100%;

  @media screen and (max-width: 824px) {
    padding: 24px 16px;
  }
`
