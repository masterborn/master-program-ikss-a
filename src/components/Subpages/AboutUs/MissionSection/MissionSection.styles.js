import styled from 'styled-components';
import { H2, BodyText } from '@root/components/typography/Typography';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';

export const MissionSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 106px;
  margin-bottom: 177px;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  height: 245px;
  border-radius: 16px;
  overflow: hidden;
  @media ${({ theme }) => theme.medias.medium} {
    border-radius: 8px;
  }
`;

export const StyledHeader = styled(H2)`
  margin-left: 56px;
  color: ${getColor('navy')};
  @media ${({ theme }) => theme.medias.medium} {
    margin: 0 auto 0 auto;
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const RightSection = styled.div`
  margin-left: 56px;
  @media ${({ theme }) => theme.medias.medium} {
    text-align: center;
    margin: 32px 0 0 0;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const StyledMissionText = styled(BodyText)`
  max-width: 658px;
  margin-top: 24px;
  margin-left: 56px;
  color: ${getColor('steel')};
  text-align: justify;
  @media ${({ theme }) => theme.medias.medium} {
    font-size: ${getFontSize('bodySmall')};
    align-content: center;
    margin: 16px 0 0 0;
  }
`;
