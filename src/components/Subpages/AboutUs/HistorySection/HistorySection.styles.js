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
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto 0 auto;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
  }
`;

export const TopSection = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto 0 auto;

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const StyledTopSectionText = styled.div`
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const StyledHistoryTextTop = styled(BodyText)`
  max-width: 658px;
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 40px;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const TopImageWrapper = styled.div`
  margin: 0 0 32px 56px;
  height: 352px;
  border-radius: 16px;
  overflow: hidden;

  @media ${({ theme }) => theme.medias.medium} {
    margin: 0 auto 0 auto;
    height: 238px;
    border-radius: 8px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto 0 auto;
  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }
`;

export const StyledHistoryTextBottom = styled(BodyText)`
  max-width: 658px;
  margin: 0 auto 0 auto;
  text-indent: 25px;
  margin-top: -55px;
  margin-bottom: 148px;
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: justify;
    font-size: ${getFontSize('bodySmall')};
    margin-top: 32px;
    margin-bottom: 70px;
    text-indent: 0px;
  }
`;

export const BottomImageWrapper = styled.div`
  height: 265px;
  margin: 0 0 0 56px;
  border-radius: 16px;
  overflow: hidden;

  @media ${({ theme }) => theme.medias.medium} {
    border-radius: 8px;
    margin-left: 0px;
  }
`;

export const StyledHeader = styled(H2)`
  margin-left: 0px;
  margin-top: 0px;
  color: ${getColor('navy')};
  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 32px;
    margin-bottom: 16px;
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;
