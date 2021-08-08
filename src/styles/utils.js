import { color, fontFamily, fontStyles } from './theme';

export const getColor = (colorName) => {
  return ({ theme }) => theme.color[colorName];
};

export const getFontFamily = (fontName) => {
  return ({ theme }) => theme.fontFamily[fontName];
};

export const getFontWeight = (styleName) => {
  return ({ theme }) => theme.fontStyles[styleName].fontWeight;
};

export const getFontSize = (styleName) => {
  return ({ theme }) => theme.fontStyles[styleName].fontSize;
};

export const getLineHeight = (styleName) => {
  return ({ theme }) => theme.fontStyles[styleName].lineHeight;
};

export const getLetterSpacing = (styleName) => {
  return ({ theme }) => theme.fontStyles[styleName].letterSpacing;
};
