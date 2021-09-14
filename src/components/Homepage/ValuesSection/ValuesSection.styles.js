import styled from 'styled-components';
import {
  getColor,
  getFontWeight,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';
import { H3, H5, BodyText } from '@root/components/typography/Typography';

export const ValuesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 157px auto 0;

  @media ${({ theme }) => theme.medias.medium} {
    margin: 80px 24px 0 24px;
  }
`;

export const Heading = styled(H3)`
  color: ${getColor('navy')};
  margin-bottom: 32px;
  text-align: center;
  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
    margin-bottom: 24px;
  }
`;

export const Description = styled(BodyText)`
  color: ${getColor('steel')};
  width: 551px;
  text-align: center;

  @media ${({ theme }) => theme.medias.medium} {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const TilesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 102px;
  padding: 0 24px;
  width: 100%;

  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 0;
    display: none;
  }
`;

export const Tile = styled.div`
  position: relative;
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  padding: 0 24px 48px;
  text-align: center;
  transition: transform 0.2s;

  &:nth-child(2) {
    margin: 0 24px;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translateX(-50%);
  }

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 78px;
    padding: 0 20px 24px;
    box-shadow: none;

    &:hover {
      transform: none;
    }
    img {
      margin: 0 auto 0 auto;
    }
  }
`;

export const TileHeading = styled(H5)`
  color: ${getColor('navy')};
  margin: 186px 0 16px;

  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 192px;
  }
`;

export const TileDescription = styled(BodyText)`
  color: ${getColor('steel')};
`;
