import styled from 'styled-components';

import { getColor } from '@root/styles/utils';

import { SmallButton } from '../Button/Button.styles';

export const Nav = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  height: 88px;
  padding: 20px 120px;
  align-items: center;
  justify-content: space-between;
  background-color: ${getColor('white')};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);

  @media (max-width: 1200px) {
    padding: 20px 65px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    height: 56px;
    padding: 10px 27px 10px 24px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-left: 126px;

  @media (max-width: 1300px) {
    margin-left: 80px;
  }

  @media (max-width: 1200px) {
    margin-left: 60px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 301px;
  height: 100%;
  border-radius: 16px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s;

  @media ${({ theme }) => theme.medias.medium} {
    display: block;
  }
`;

export const LinksList = styled.ul`
  width: 413px;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media ${({ theme }) => theme.medias.medium} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;

    li {
      flex-basis: 56px;
      box-shadow: inset 0px 1.5px 0px #eaf5ff;

      &:last-child {
        box-shadow: inset 0px 1.5px 0px #eaf5ff, inset 0px -1.5px 0px #eaf5ff;
      }
    }
  }
`;

export const ContactButton = styled(SmallButton)`
  @media ${({ theme }) => theme.medias.medium} {
    margin: 40px auto;
  }
`;

export const StyledIcon = styled.a`
  text-decoration: none;
  cursor: pointer;

  @media ${({ theme }) => theme.medias.medium} {
    img {
      width: 56px;
      height: 35px;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ active }) => (active ? getColor('navy') : getColor('steel'))};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ active }) => (active ? getColor('navy') : getColor('steel70'))};
  }

  @media ${({ theme }) => theme.medias.medium} {
    padding-left: 24px;
    line-height: 56px;
    display: inline-block;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 89px 0 auto;
  width: 168px;
  height: 24px;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.1s;

  a {
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
      background-color: #d1e7fb;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 0.15;
    }

    @media ${({ theme }) => theme.medias.medium} {
      img {
        width: 32px;
      }

      &:hover::after {
        opacity: 0;
      }

      &:active::after {
        opacity: 0.15;
      }
    }
  }

  @media (max-width: 1300px) {
    margin-right: 50px;
  }

  @media (max-width: 1200px) {
    width: 148px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    width: 200px;
    height: 32px;
    margin: 0 auto;
    opacity: 1;
    pointer-events: auto;
  }

  a {
    cursor: pointer;

    @media ${({ theme }) => theme.medias.medium} {
      img {
        width: 32px;
      }
    }
  }
`;

export const CloseBrgButton = styled.button`
  display: none;
  width: 14px;
  height: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 21px 29px 21px auto;

  @media ${({ theme }) => theme.medias.medium} {
    display: block;
  }
`;

export const BrgButton = styled.button`
  display: none;
  width: 18px;
  height: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${({ theme }) => theme.medias.medium} {
    display: block;
  }
`;

export const Layer = styled.div`
  position: fixed;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a2847;
  opacity: ${({ active }) => (active ? '0.6' : '0')};
  transition: opacity 0.3s, visibility 0.3s;
  cursor: pointer;
`;
