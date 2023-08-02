import styled from 'styled-components';

import { H2, BodyText } from '@root/components/typography/Typography';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';

export const HistorySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px 0 24px;
  margin: 0 auto 148px auto;
  max-width: 1245px;

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  margin: 0 auto 0 auto;

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const StyledTopSectionText = styled.div`
  max-width: 658px;
  margin-right: 56px;

  @media (max-width: 1300px) {
    max-width: 448px;
  }
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0;
    max-width: none;
  }
`;

export const StyledHistoryTextTop = styled(BodyText)`
  color: ${getColor('steel')};

  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 40px;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const TopImageWrapper = styled.div`
  margin-bottom: 32px;
  overflow: hidden;

  div {
    border-radius: 16px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
    margin: 32px auto 0 auto;

    div {
      border-radius: 8px;
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  margin: 0 auto 0 auto;
  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const StyledHistoryTextBottom = styled(BodyText)`
  max-width: 658px;
  margin: 0 56px 0 auto;
  text-indent: 25px;
  margin-top: -55px;
  color: ${getColor('steel')};

  & p:first-child {
    margin-bottom: 32px;
  }

  @media (max-width: 1300px) {
    max-width: 448px;
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    font-size: ${getFontSize('bodySmall')};
    margin: 32px 0 0 0;
    text-indent: 0px;
    max-width: 100%;
  }
`;

export const BottomImageWrapper = styled.div`
  overflow: hidden;

  div {
    border-radius: 16px;
  }

  @media (max-width: 1300px) {
    margin-top: 36px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
    margin: 0 auto 0 auto;
    div {
      border-radius: 8px;
    }
  }
`;

export const StyledHeader = styled(H2)`
  color: ${getColor('navy')};
  margin-bottom: 24px;

  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 32px;
    margin-bottom: 16px;
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const TopImageMobileWrapper = styled(TopImageWrapper)`
  display: none;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
  }
`;

export const BottomImageMobileWrapper = styled(BottomImageWrapper)`
  display: none;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
  }
`;
