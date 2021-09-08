import styled from 'styled-components';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getLetterSpacing,
} from '@root/styles/utils';
import { H3 } from '@root/components/typography/Typography';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.medias.medium} {
    padding: 0 24px 0 24px;
  }
`;

export const TextSection = styled.div`
  max-width: 635px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 64px;

  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 56px;
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
  }
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;

  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column;
  }
`;
