import styled from 'styled-components';
import Image from 'next/image';
import { Tab, TabList, TabPanel } from 'react-tabs';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
} from '@root/styles/utils';
import { H3, H4, H5 } from '@root/components/typography/Typography';
import dynamic from 'next/dynamic';
import { BigButton, SecondaryBigButton } from '@root/components/Button/Button.styles';
import { medias } from '@root/styles/theme';

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
);

const { small } = medias;

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 997px;
  margin: 180px auto 0;

  a {
    text-decoration: none;
  }

  @media ${small} {
    padding: 0 24px;
    margin-top: 80px;
  }
`;

export const StyledTab = styled(Tab)`
  color: ${getColor('navy')};

  .tab-button {
    background: none;
    color: ${getColor('navy')};
  }

  &.react-tabs__tab--selected {
    display: block;
    border-radius: 26px;
    color: ${getColor('white')};
    background-color: ${getColor('ikssBlue')};
    .tab-button {
      background: none;
      color: ${getColor('white')};
    }
    @media ${small} {
      &.react-tabs__tab--selected {
        background: none;
      }
      .tab-button {
        background-color: ${getColor('ikssBlue')};
      }
      &:first-child {
        display: flex;
        width: 100%;
        justify-content: center;
      }
    }
  }
  @media ${small} {
    .tab-button {
      background-color: ${getColor('blue10')};
    }

    &:first-child {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  background-color: ${getColor('blue10')};
  margin: 32px 0 64px 0;
  border-radius: 26px;

  @media ${small} {
    margin: 24px 0;
    gap: 12px;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    background: none;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  background: ${getColor('white')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  &.react-tabs__tab-panel--selected {
    animation-name: fadeIn;
    animation-duration: 800ms;
    animation-timing-function: linear;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledTabTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 102px;

  @media ${small} {
    padding: 32px 24px 32px 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  img {
    filter: invert(100%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
  }

  @media ${small} {
    margin: 0 auto 0 auto;
  }
`;

export const TitleWithDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  @media ${small} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;
export const ProjectTitle = styled(H4)`
  margin: 0 24px 0 0;
  @media ${small} {
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 8px 0;
  }
`;

export const ProjectDate = styled(H5)`
  color: ${getColor('steel')};

  @media ${small} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ProjectDescription = styled.div`
  color: ${getColor('steel')};
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.015px;

  @media ${small} {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const StyledVideo = styled.iframe`
  border: none;
  border-radius: 16px 16px 0 0;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const StyledImage = styled(Image)`
  border-radius: 16px 16px 0 0;
`;

export const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 58%;
  position: relative;
  height: 0;
`;

export const ResponsiveHeader = styled(H3)`
  @media ${small} {
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const ResponsiveButton = styled(BigButton)`
  @media ${small} {
    height: 36px;
    padding: 9px 16px;
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const SeeProjectsButton = styled(SecondaryBigButton)`
  margin: 56px 0 148px 0;
  text-decoration: none;
  @media ${small} {
    height: 36px;
    padding: 9px 16px;
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};
    margin: 32px 0 80px 0;
  }
`;
