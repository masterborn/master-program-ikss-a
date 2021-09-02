export const fontFamily = { primaryFont: 'Mulish' };

export const fontStyles = {
  h1: {
    fontSize: '56px',
    fontWeight: '900',
    letterSpacing: '-0.015rem',
    lineHeight: '72px',
  },
  h2: {
    fontSize: '40px',
    fontWeight: '900',
    letterSpacing: '-0.015rem',
    lineHeight: '72px',
  },
  h3: {
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.015rem',
    lineHeight: '44px',
  },
  h4: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '-0.015rem',
    lineHeight: '32px',
  },
  h5: {
    fontSize: '18px',
    fontWeight: '800',
    letterSpacing: '-0.015rem',
    lineHeight: '24px',
  },
  body: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.015rem',
    lineHeight: '32px',
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '-0.015rem',
    lineHeight: '28px',
  },
};

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
  blue5: '#F5FAFF',
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

export const medias = {
  small: '(max-width: 768px)',
  medium: '(max-width: 1024px)',
  large: '(max-width: 1600px)',
};

export const theme = {
  fontFamily,
  fontStyles,
  color,
  medias,
};

export default theme;
