import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  body, input, button, textarea, a {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.COLORS.TEXT_BLACK};
    text-decoration: none;

  }


  @media(min-width: 920px) {
    body {
        background-image: url('/src/assets/bg.jpg');
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;

    }
  }

`;
