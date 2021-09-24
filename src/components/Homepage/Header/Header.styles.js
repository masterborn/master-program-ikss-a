import styled from 'styled-components';
import {
  getColor,
  getFontSize,
  getLineHeight,
  getLetterSpacing,
  getFontWeight,
} from '@root/styles/utils';
import { H1, H5, BodyText } from '@root/components/typography/Typography';
import { SecondaryBigButton } from '@root/components/Button/Button.styles';

export const HeaderWrapper = styled.div`
  background-image: ${getColor('backgroundGradient')};
`;

export const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto 0 auto;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column-reverse;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 454px;

  @media (max-width: 1520px) {
    margin-left: 56px;
    max-height: 372px;
    margin-right: 100px;
  }

  @media (max-width: 1200px) {
    max-height: 316px;
    margin-right: 40px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    padding: 0 24px 0 24px;
    margin-left: 0;
    max-height: auto;
    margin-bottom: 40px;
  }
`;

export const StyledVideo = styled.video`
  max-width: 56%;

  @media ${({ theme }) => theme.medias.medium} {
    max-width: 100%;
  }
`;

export const HeroHeading = styled(H1)`
  color: ${getColor('navy')};
  margin-top: 77px;

  @media (max-width: 1520px) {
    margin-top: 36px;
    font-weight: ${getFontWeight('h2')};
    font-size: ${getFontSize('h2')};
    line-height: ${getLineHeight('h2')};
    letter-spacing: ${getLetterSpacing('h2')};
  }

  @media (max-width: 1200px) {
    margin-top: 26px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    font-size: 32px;
    line-height: 44px;
    margin-top: 40px;
  }
`;

export const HeroLink = styled(H5)`
  margin-left: 16px;
  color: ${getColor('navy')};

  @media (max-width: 1380px) {
    margin-left: 12px;

    font-size: 16px;
  }

  @media (max-width: 1200px) {
    margin-left: 10px;

    font-size: 14px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const HeroBodyText = styled(BodyText)`
  margin-top: 32px;
  max-width: 416px;
  color: ${getColor('steel')};

  @media (max-width: 1520px) {
    margin-top: 12px;
  }
  @media ${({ theme }) => theme.medias.medium} {
    max-width: 100%;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const HeroButton = styled(SecondaryBigButton)`
  margin-top: 32px;

  @media (max-width: 1520px) {
    margin-top: 24px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    height: 36px;
    padding: ${({ icon }) => (icon ? `9px 16px 9px 12px` : `9px 16px`)};
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const HeaderSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 120px 44px 56px;
  max-width: 1038px;
  margin-left: auto;
  background-color: ${getColor('white')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px 0 16px 16px;

  @media (max-width: 1380px) {
    width: 70%;
    padding: 36px 60px 36px 16px;
  }

  @media (max-width: 1200px) {
    border-radius: 0 0 0 16px;
    width: 56%;
  }

  @media ${({ theme }) => theme.medias.medium} {
    margin: 0 24px 0 24px;
    padding: 24px 40px 24px 40px;
    border-radius: 16px;
    width: 100%;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 835px;

  a {
    display: flex;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media ${({ theme }) => theme.medias.medium} {
    a {
      display: block;
    }
  }
`;

export const StyledSocials = styled.a`
  display: block;

  @media (max-width: 1200px) {
    display: none;
    width: 32px;
    height: 32px;
  }
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: ${getColor('ikssBlue')};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover div::after {
    opacity: 0.15;
  }

  @media ${({ theme }) => theme.medias.medium} {
    &:hover div::after {
      opacity: 0;
    }

    &:active div::after {
      opacity: 0.15;
    }
  }
`;

export const SocialIconWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  @media (max-width: 1200px) {
    width: 32px;
    height: 32px;
  }
`;

export const Wrapper = styled.div``;
