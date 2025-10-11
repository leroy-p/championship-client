import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
  visible: boolean
  close: () => void
}

export default function Dialog({ children, visible, close }: IProps) {
  return (
    <Container onClick={close} $visible={visible}>
      <div className="dialog-main-container" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </Container>
  )
}

const Container = styled(Div100vh)<{ $visible: boolean }>`
  align-items: center;
  background-color: #00000080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'non')};
  position: fixed;
  top: 0;
  transition: opacity 200ms ease-in-out;
  width: 100vw;
  z-index: 1;

  .dialog-main-container {
    border: ${({ theme }) => `solid 1px ${theme.palette.text}`};
    background-color: ${({ theme }) => theme.palette.background};
  }
`
