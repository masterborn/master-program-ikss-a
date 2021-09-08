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

export const MissionSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-top: 106px;
  margin-bottom: 177px;
  @media ${small} {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  @media ${small} {
    border-radius: 8px;
    width: 327px;
    height: 201px;
  }
`;

export const StyledHeader = styled(H2)`
  margin-left: 56px;
  @media ${small} {
    margin-left: 24px;
    color: ${getColor('navy')};
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const RightSection = styled.div`
  width: 658px;
  height: 128px;
  margin-left: 56px;
  @media ${small} {
    width: 327px;
    height: 196px;
    margin-bottom: 16px;
    margin-left: 24px;
    margin-right: 72px;
  }
`;

export const StyledMissionText = styled(BodyText)`
  width: 658px;
  height: 120px;
  margin-top: 24px;
  margin-left: 56px;
  @media ${small} {
    color: ${getColor('steel')};
    font-size: ${getFontSize('bodySmall')};
    width: 327px;
    height: 196px;
    margin-bottom: 80px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;
