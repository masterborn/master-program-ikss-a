import styled from 'styled-components';
import { H2, BodyText } from '@root/components/typography/Typography';
import { medias } from '@root/styles/theme';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';

const { small } = medias;

export const HistorySectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 120px;
  margin-right: 123px;
  @media ${small} {
    display: flex;
    flex-direction: column;
    width: 327px;
    margin-top: 80px;
    margin-left: 24px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  width: 1197px;
  height: 352px;
  margin-bottom: 32px;

  @media ${small} {
    display: flex;
    flex-direction: column-reverse;
    width: 327px;
    height: 803px;
  }
`;

export const StyledTopSectionText = styled.div`
  height: 483px;
  @media ${small} {
    width: 327px;
  }
`;

export const StyledHistoryTextTop = styled(BodyText)`
  width: 658px;
  @media ${small} {
    width: 327px;
    margin-bottom: 40px;
    color: ${getColor('steel')};
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const TopImageWrapper = styled.div`
  width: 483px;
  height: 265px;
  margin-left: 56px;
  border-radius: 16px;
  overflow: hidden;
  @media ${small} {
    width: 327px;
    height: 238px;
    margin-left: 0px;
    border-radius: 8px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  width: 1197px;
  @media ${small} {
    flex-direction: column-reverse;
    width: 327px;
  }
`;

export const StyledHistoryTextBottom = styled(BodyText)`
  width: 658px;
  height: 483px;
  text-indent: 25px;
  margin-top: -60px;
  @media ${small} {
    width: 327px;
    color: ${getColor('steel')};
    font-size: ${getFontSize('bodySmall')};
    margin-top: 32px;
    text-indent: 0px;
  }
`;

export const BottomImageWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 483px;
  height: 265px;
  margin-left: 56px;
  margin-top: -30px;
  @media ${small} {
    width: 327px;
    height: 190px;
    border-radius: 8px;
    margin-left: 0px;
  }
`;

export const StyledHeader = styled(H2)`
  margin-left: 0px;
  margin-top: 0px;
  @media ${small} {
    margin-top: 32px;
    margin-bottom: 16px;
    color: ${getColor('navy')};
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;
