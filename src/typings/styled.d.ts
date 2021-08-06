import 'styled-components';
import { fontFamily, fontWeight, color, medias } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: typeof fontFamily;
    fontWeight: typeof fontWeight;
    color: typeof color;
    medias: typeof medias;
  }
}
