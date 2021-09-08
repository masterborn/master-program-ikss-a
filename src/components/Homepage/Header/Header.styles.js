import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { H1, H5, BodyText } from '@root/components/typography/Typography';
import { SecondaryBigButton, SecondarySmallButton } from '@root/components/Button/Button.styles';

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
    padding: 0 0 40px 0;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 454px;

  @media ${({ theme }) => theme.medias.medium} {
    padding: 0 24px 0 24px;
    margin-left: 0;
    max-height: auto;
  }
`;

export const StyledVideo = styled.video`
  max-width: 808px;

  @media ${({ theme }) => theme.medias.medium} {
    max-width: 100%;
  }
`;

export const HeroHeading = styled(H1)`
  color: ${getColor('navy')};
  margin-top: 77px;

  @media ${({ theme }) => theme.medias.medium} {
    font-size: 32px;
    line-height: 44px;
    margin-top: 40px;
  }
`;

export const HeroLinks = styled(H5)`
  margin-left: 16px;
  color: ${getColor('navy')};
  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const HeroBodyText = styled(BodyText)`
  margin-top: 32px;
  max-width: 416px;
  @media ${({ theme }) => theme.medias.medium} {
    max-width: 100%;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const HeroSecondaryBigButton = styled(SecondaryBigButton)`
  margin-top: 32px;

  margin-bottom: 42px;
  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const HeroSmallButton = styled(SecondarySmallButton)`
  display: none;
  @media ${({ theme }) => theme.medias.medium} {
    display: block;
    margin-top: 24px;
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
  border-radius: 16px 0px 0px 16px;

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
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.medias.medium} {
    width: 100%;
    a {
      display: block;
    }
  }
`;

export const StyledSocials = styled.a`
  display: block;
  @media ${({ theme }) => theme.medias.medium} {
    display: none;
    width: 32px;
    height: 32px;
  }
`;

export const StyledMobileSocials = styled.a`
  display: none !important;
  @media ${({ theme }) => theme.medias.medium} {
    display: inline-block;
  }
`;
