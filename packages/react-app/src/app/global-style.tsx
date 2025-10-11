import { createGlobalStyle } from 'styled-components'
import shortStack from '../assets/fonts/ShortStack-Regular.ttf'
import { ITheme } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "ShortStack";
    src: url("${shortStack}");
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'ShortStack', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, input {
    color: ${({ theme }) => theme.palette.text};
    font-family: 'Roboto', sans-serif;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
  }

  p.error {
    color: ${({ theme }) => theme.palette.error};
  }

  a {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
    outline:none;
    padding: 0;

    &:hover {
      opacity: 0.7;
    }
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
