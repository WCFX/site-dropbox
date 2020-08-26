import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2 {
    font-family: "Sharp Grotesk DB Cyr Medium 22", sans-serif;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    line-height: 1.625rem;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-white);
  }
  ul {
    list-style: none
  }
  *, button, input, li {
    font-family: Roboto, sans-serif;
  }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-white: #fff;
    --color-black: #000;
    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  } 
  
`;