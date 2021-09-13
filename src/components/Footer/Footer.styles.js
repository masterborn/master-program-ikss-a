import styled from 'styled-components';
import { getColor, getFontSize } from '@root/styles/utils';
import { BigButton } from '../Button/Button.styles';

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ homepage }) => (homepage ? '728px' : 'auto')};
  background-color: ${getColor('ikssBlue')};
  color: ${getColor('white')};
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
  text-align: center;

  @media ${({ theme }) => theme.medias.medium} {
    padding: 0 24px 40px 24px;
  }
`;

export const ResponsiveButton = styled(BigButton)`
  @media ${({ theme }) => theme.medias.medium} {
    height: 36px;
    padding: 9px 16px;
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ homepage }) => (homepage ? 'auto' : '56px')};

  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column;
    gap: 3px;
  }
`;

export const FooterSocialIconsWrapper = styled.div`
  width: 189px;
  display: flex;
  margin-top: 48px;
  justify-content: space-between;
  align-items: center;
  img {
    filter: invert(100%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
  }

  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 40px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoDecorationLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${getColor('white')};
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 84px;
  margin: 48px 0 56px 0;

  @media ${({ theme }) => theme.medias.medium} {
    height: 38px;
    width: 66px;
    margin: 40px 0 48px 0;
  }
`;

export const HeartWrapper = styled.div`
  margin: 0 6px 0 6px;
`;

export const ButtonCircle = styled.button`
  position: absolute;
  width: 64px;
  height: 64px;
  background-color: ${getColor('white')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -32px;
  right: 126px;
  cursor: pointer;
  border: none;

  @media (max-width: 1200px) {
    right: 60px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    width: 40px;
    height: 40px;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    top: ${({ homepage }) => (homepage ? '196px' : '-20px')};
    img {
      width: 20px;
      height: 12px;
    }
  }
`;
