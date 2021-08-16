import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily } from './utils';

const GlobalStyles = createGlobalStyle`

  html {
    min-height: 100%;
  }
    
  body {
    background: ${getColor('backgroundGradient')};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${getFontFamily('primaryFont')}, sans-serif;
  }
`;

export default GlobalStyles;
