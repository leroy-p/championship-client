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
  background: rgba(33, 33, 34, 0.60);
  backdrop-filter: blur(5px);
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
    background-color: ${({ theme }) => theme.palette.primary};
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary}`};
    border-radius: 32px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.50);

    @media screen and (max-width: 632px) {
      width: calc(100% - 32px);
    }
  }
`
