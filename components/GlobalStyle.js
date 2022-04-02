import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    
  }

  body {
    background-color: #f6f6f6;
  }

  * {
    font-family: sans-serif;
  }

  .container { 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .post-img {
    width: 100%;
  }
`;
