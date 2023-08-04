import styled from 'styled-components';

import { H3 } from '@root/components/typography/Typography';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getLetterSpacing,
} from '@root/styles/utils';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1188px;
  margin: 0 auto 0 auto;

  @media (max-width: 1162px) {
    padding: 0 24px;
  }
`;

export const TextSection = styled.div`
  max-width: 635px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 64px;

  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 32px;
  }
`;

export const StyledHeader = styled(H3)`
  color: ${getColor('navy')};

  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const StyledBodyText = styled.div`
  margin: 32px 0 32px 0;
  color: ${getColor('steel')};
  line-height: 32px;
  letter-spacing: -0.015em;
  font-size: 16px;

  @media ${({ theme }) => theme.medias.medium} {
    margin: 16px 0 16px 0;
    line-height: 28px;
    font-size: 14px;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    flex-basis: 20%;
    margin-bottom: 48px;
    justify-content: center;
  }

  @media ${({ theme }) => theme.medias.medium} {
    a {
      flex-basis: 30%;
      padding: 20px;
      margin-bottom: 24px;
      justify-content: center;
    }
  }
`;
