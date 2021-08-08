export const fontFamily = {};

export const fontStyles = {};

export const color = {
  ikssBlue: '#1889E9',
  steel: '#61798B',
  navy: '#1A2847',
  white: '#FFFFFF',
  blue50: '#8CC4F4',
  blue40: '#A3D0F6',
  blue30: '#BADCF8',
  blue20: '#D1E7FB',
  blue10: '#E8F3FD',
  blue5: 'F5FAFF',
  steel70: '#90A1AE',
  steel60: '#A0AFB9',
  steel50: '#B0BCC5',
  steel40: '#C0C9D1',
  steel30: '#D0D7DC',
  steel20: '#DFE4E8',
  successGreen: '#18D4A7',
  errorRed: '#E01A4F',
  backgroundGradient: 'linear-gradient(180deg, #F4FAFF 0%, rgba(255, 255, 255, 0) 100%);',
};

const size = {
  small: '768px',
  medium: '1024px',
  large: '1600px',
};

export const medias = {
  small: `(max-width: ${size.small})`,
  medium: `(max-width: ${size.medium})`,
  large: `(max-width: ${size.large})`,
};

export const theme = {
  fontFamily,
  fontStyles,
  color,
  medias,
};

export default theme;
