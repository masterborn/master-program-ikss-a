import styled from 'styled-components';
import {
  getColor,
  getFontWeight,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';
import { H3, H5, BodyText } from '@root/components/typography/Typography';

export const BenefitsSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1199px;
  margin: 0 auto 156px;
  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 100px;
    padding: 0 24px 0 24px;
  }
`;

export const BenefitsHeading = styled(H3)`
  color: ${getColor('navy')};
  margin-bottom: 64px;
  text-align: center;
  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
    margin-bottom: 24px;
  }
`;

export const BenefitsTilesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const BenefitsTile = styled.div`
  background-color: ${getColor('white')};
  width: 30%;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 32px 24px 24px 24px;
    
    &:hover {
      transform: none;
    }
    img {
      margin: 0 auto 0 auto;
    }
  }
`;

export const BenefitsTileHeading = styled(H5)`
  color: ${getColor('navy')};
  margin: 12px 0 20px 0;
`;

export const BenefitsTileDescription = styled(BodyText)`
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('bodySmall')};
    font-size: ${getFontSize('bodySmall')};
    line-height: ${getLineHeight('bodySmall')};
    letter-spacing: ${getLetterSpacing('bodySmall')};
  }
`;
