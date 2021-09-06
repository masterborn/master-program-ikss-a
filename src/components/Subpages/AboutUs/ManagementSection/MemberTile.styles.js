import styled from 'styled-components';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getLetterSpacing,
} from '@root/styles/utils';
import { H4, H5 } from '@root/components/typography/Typography';
import { SecondarySmallButton } from '@root/components/Button/Button.styles';

export const TileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 24px 40px 24px;
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.medias.medium} {
    width: 100%;

    &.closed {
      flex-direction: row;
      justify-content: flex-start;
    }

    &:hover {
      transform: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 164px;
  width: 164px;
  position: relative;
  margin-bottom: 24px;

  img {
    border-radius: 50%;
  }

  @media ${({ theme }) => theme.medias.medium} {
    height: ${({ isTileOpen }) => (isTileOpen ? '164px' : '80px')};
    width: ${({ isTileOpen }) => (isTileOpen ? '164px' : '80px')};
    margin-bottom: ${({ isTileOpen }) => (isTileOpen ? '16px' : '0')};
  }
`;

export const ImagePlaceholder = styled(ImageWrapper)`
  background-color: ${getColor('blue20')};
  border-radius: 50%;
`;

export const NameWithRole = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${({ theme }) => theme.medias.medium} {
    align-items: ${({ isTileOpen }) => (isTileOpen ? 'center' : 'flex-start')};
    text-align: ${({ isTileOpen }) => (isTileOpen ? 'center' : 'start')};
    margin-left: ${({ isTileOpen }) => (isTileOpen ? '0' : '24px')};
    max-width: ${({ isTileOpen }) => (isTileOpen ? 'auto' : '50%')};
  }
`;

export const MemberName = styled(H4)`
  display: flex;
  gap: 8px;

  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('h5')};
    font-size: ${getFontSize('h5')};
    line-height: ${getLineHeight('h5')};
    letter-spacing: ${getLetterSpacing('h5')};
    flex-direction: ${({ isTileOpen }) => (isTileOpen ? 'row' : 'column')};
    gap: ${({ isTileOpen }) => (isTileOpen ? '5px' : '0')};
  }
`;

export const MemberRole = styled(H5)`
  color: ${getColor('steel')};
  height: 48px;

  @media ${({ theme }) => theme.medias.medium} {
    height: auto;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RolePlaceholder = styled.div`
  height: 48px;
  width: 20%;

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  margin-left: auto;
  transition: transform 0.4s ease-in-out;
  &.opened {
    transform: rotate(180deg);
    position: absolute;
    top: 21px;
    right: 26px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: block;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.medias.medium} {
    display: ${({ isTileOpen }) => (isTileOpen ? 'flex' : 'none')};
  }
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  width: 112px;
  justify-content: space-between;
  margin: 24px 0 12px 0;

  @media ${({ theme }) => theme.medias.medium} {
    margin: 16px 0 12px 0;
  }
`;

export const PhoneNumber = styled.a`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${getColor('ikssBlue')};
  text-decoration: none;
  height: 18px;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 16px;
  }
`;

export const ContactPlaceholder = styled.div`
  height: 18px;
  width: 100%;
  margin: 0;

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;

export const MembersEmail = styled(PhoneNumber)``;

export const StyledLinkedinButton = styled(SecondarySmallButton)`
  p {
    margin-left: 6px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;

export const ButtonPlaceholder = styled.div`
  height: 36px;
  width: 20%;

  @media ${({ theme }) => theme.medias.medium} {
    display: none;
  }
`;
