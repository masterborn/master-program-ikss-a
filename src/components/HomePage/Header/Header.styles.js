import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { H1, H5, BodyText } from '@root/components/typography/Typography';
import { SecondaryBigButton, SmallButton } from '@root/components/Button/Button.styles';
import { medias } from '@root/styles/theme';

const { small } = medias;

export const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  @media ${small} {
    flex-direction: column-reverse;
    width: 375px;
    margin: 0 0 40 0;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  @media ${small} {
    width: 375px;
    height: 234px;
    margin: 0 0 40px 24px;
  }
`;

export const Vid = styled.div`
  width: 808px;
  height: 505px;
  margin-top: 0px;
  margin-right: 0px;
  @media ${small} {
    height: 234px;
    iframe {
      position: absolute;
      width: 808px;
      height: 234px;
    }
  }
`;

export const HeroHeading = styled(H1)`
  margin-top: 77px;
  margin-left: 120px;
  @media ${small} {
    font-size: 32px;
    line-height: 44px;
    width: 327px;
    margin-left: 24px;
    margin-top: 40px;
  }
`;

export const HeroLinks = styled(H5)`
  margin-left: 14px;
  color: ${getColor('navy')};
  @media ${small} {
    display: none;
  }
`;

export const HeroBodyText = styled(BodyText)`
  margin-top: 32px;
  margin-left: 120px;
  width: 384px;
  @media ${small} {
    width: 327px;
    font-size: 14px;
    line-height: 28px;
    margin-left: 24px;
  }
`;

export const HeroSecondaryBigButton = styled(SecondaryBigButton)`
  margin-top: 32px;
  margin-left: 120px;
  margin-bottom: 42px;
  @media ${small} {
    display: none;
  }
`;

export const HeroSmallButton = styled(SmallButton)`
  display: none;
  @media ${small} {
    display: block;
    margin-top: 24px;
    margin-bottom: 40px;
    margin-left: 24px;
  }
`;

export const HeaderSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1038px;
  height: 137px;
  margin-right: 0px;
  margin-left: 402px;
  background-color: #ffffff;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px 0px 0px 16px;
  margin-bottom: 32px;
  @media ${small} {
    width: 327px;
    height: 80px;
    margin: 100px 24px 0px 24px;
    border-radius: 16px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 835px;
  height: 120px;
  margin-left: 56px;
  margin-right: 120px;
  margin-top: 44px;
  margin-bottom: 45px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }
  @media ${small} {
    width: 375px;
    height: 187px;
    margin: 0 0 80px 0;
    a {
      display: block;
      margin-top: 71px;
  }
`;

export const StyledSocials = styled.a`
  display: block;
  @media ${small} {
    display: none;
    width: 24px;
    height: 24px;
  }
`;

export const StyledMobileSocials = styled.a`
  display: none !important;
  @media ${small} {
    display: inline-block;
  }
`;
