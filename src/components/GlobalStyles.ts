import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background: ${(props) => props.theme.background};
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
