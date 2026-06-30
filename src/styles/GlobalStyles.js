import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #000000;
    color: #f0f4f1;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: #f8e531;
    color: #000000;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a120e;
  }

  ::-webkit-scrollbar-thumb {
    background: #f8e531;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #f8e531;
    opacity: 0.8;
  }
`;

export default GlobalStyles;
