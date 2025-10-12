import { createGlobalStyle } from 'styled-components'
import playBold from '../assets/fonts/Play-Bold.ttf'
import playRegular from '../assets/fonts/Play-Regular.ttf'
import { ITheme } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "Play";
    src: url("${playRegular}");
    font-weight: normal;
  }

  @font-face {
    font-family: "Play";
    src: url("${playBold}");
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Play', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, input {
    color: ${({ theme }) => theme.palette.text};
    font-family: 'Play', sans-serif;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
  }

  p.error {
    color: ${({ theme }) => theme.palette.error};
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;
    outline:none;
    padding: 0;
  }

  input {
    border-radius: 0;
  }

  input:focus {
    outline: none;
  }

  textarea:focus {
    outline: none;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`

export default GlobalStyle
