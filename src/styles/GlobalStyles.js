import { createGlobalStyle } from 'styled-components';
import { getFontFamily } from './utils';

const GlobalStyles = createGlobalStyle`

  html {
    min-height: 100%;
  }
    
  body {
    position: relative;
    overflow-x: hidden;
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
