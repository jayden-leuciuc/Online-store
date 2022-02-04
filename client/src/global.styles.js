import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  list-style-type: none;
}


body {
  font-family: 'Open Sans Condensed';
  display: flex;
  flex-direction:column;
  min-height: 100%;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}

`;
