import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  body, html {
    height: 100vh;
    width: 100%;
    background: #17171a;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`