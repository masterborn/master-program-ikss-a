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
  margin: 119px auto 0;
  @media ${({ theme }) => theme.medias.medium} {
    margin: 24px;
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
  margin-top: 148px;
  width: 100%;
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const BenefitsTile = styled.div`
  position: relative;
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.2s;
  &:nth-child(2) {
    margin: 0 auto;
  }
  &:nth-child(4) {
    margin: 24px 24px 0 0;
  }
  &:nth-child(5) {
    margin: 24px 24px 0 0;
  }
  &:hover {
    transform: scale(1.1);
  }
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 32px;
  }
  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    width: 327px;
    flex-direction: column;
    width: 100%;
    margin-top: 78px;
    padding: 32px 24px;
    box-shadow: none;
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
  margin: 194px 0 24px;
  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 173px;
  }
`;

export const BenefitsTileDescription = styled(BodyText)`
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
