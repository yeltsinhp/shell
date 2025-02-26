import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    overflow: hidden;
  }
    
  body {
    font-family: Arial, sans-serif;
    background: ${(props) => props.theme.background};
    background-size: cover;
    color: ${(props) => props.theme.text};
    transition: background 0.3s, color 0.3s;
  }

  input, button {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
  }
`;
