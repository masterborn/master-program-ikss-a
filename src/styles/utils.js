export const getColor =
  (colorName) =>
  ({ theme }) =>
    theme.color[colorName];

export const getFontFamily =
  (fontName) =>
  ({ theme }) =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (styleName) =>
  ({ theme }) =>
    theme.fontStyles[styleName].fontWeight;

export const getFontSize =
  (styleName) =>
  ({ theme }) =>
    theme.fontStyles[styleName].fontSize;

export const getLineHeight =
  (styleName) =>
  ({ theme }) =>
    theme.fontStyles[styleName].lineHeight;
export const getLetterSpacing =
  (styleName) =>
  ({ theme }) =>
    theme.fontStyles[styleName].letterSpacing;
