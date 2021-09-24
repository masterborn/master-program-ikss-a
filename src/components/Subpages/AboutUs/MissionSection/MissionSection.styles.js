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
  max-width: 1197px;
  justify-content: center;
  margin: 0 auto 148px auto;
  align-items: center;
  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 0;
    padding: 0 24px 0 24px;
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  div {
    border-radius: 16px;
    display: block !important;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
    div {
      border-radius: 8px;
    }
  }
`;

export const StyledHeader = styled(H2)`
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
    margin: 32px 0 0 0;
  }
`;

export const StyledMissionText = styled(BodyText)`
  max-width: 658px;
  margin-top: 24px;
  color: ${getColor('steel')};

  @media (max-width: 1300px) {
    max-width: 448px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    font-size: ${getFontSize('bodySmall')};
    margin: 16px 0 0 0;
    max-width: 100%;
  }
`;

export const ImageMobileWrapper = styled(ImageWrapper)`
  display: none;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
  }
`;
