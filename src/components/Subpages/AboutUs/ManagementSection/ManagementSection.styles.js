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
  max-width: 1248px;
  margin: ${({isHoneycomb}) => isHoneycomb ? '0 auto -76px' : '0 auto 164px'} ;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  @media(max-width: 1300px) {
    padding: ${({isHoneycomb}) => isHoneycomb ? '0 18px' : '0 24px'};
  }

  @media ${({ theme }) => theme.medias.medium} {
    padding: 0 24px;
    margin: 0 auto;
  }
`;

export const TextSection = styled.div`
  max-width: 635px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: ${({isHoneycomb}) => isHoneycomb ? '328px' : '64px'};

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

  @media(max-width: 1300px) {
    gap: 16px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column;
  }
`;
