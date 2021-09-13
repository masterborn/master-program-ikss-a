import styled from 'styled-components';
import { getColor } from '@root/styles/utils';

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${getColor('ikssBlue')};
  color: ${getColor('white')};
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
`;

export const FooterLinksWrapper = styled.div`
  width: 413px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const FooterSocialIconsWrapper = styled.div`
  width: 189px;
  display: flex;
  margin-top: 48px;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

export const NoDecorationLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${getColor('white')};
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
  box-shadow: 0px 16px 31px rgba(26, 40, 71, 0.1), 0px 6.16296px 9.87407px rgba(26, 40, 71, 0.0607407), 0px 1.3037px 2.52593px rgba(26, 40, 71, 0.0392593);
  z-index: 1;
  
  @media (max-width: 1200px) {
    right: 60px;
  }
`;
