import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  list-style-type: none;
}

body {
  font-family: 'Open Sans Condensed';

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}

`;
