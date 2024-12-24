import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  p {
    line-height: 1.5;
    font-size: 1.125rem;
  }

  img, svg {
    max-width: 100%;
    display: block;
  }
  `;


export default GlobalStyles;