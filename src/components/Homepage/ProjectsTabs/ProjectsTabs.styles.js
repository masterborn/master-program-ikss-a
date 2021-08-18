import styled from 'styled-components';
import Image from 'next/image';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { getColor } from '@root/styles/utils';
import { H4, H5 } from '@root/components/typography/Typography';
import dynamic from 'next/dynamic';
import { SecondaryBigButton } from '@root/components/Button/Button.styles';

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
);

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 222px 0 222px;
  margin-top: 180px;
  a {
    text-decoration: none;
  }
`;

export const StyledTab = styled(Tab)`
  cursor: pointer;
  color: ${getColor('navy')};

  .tab-button {
    background: none;
    color: ${getColor('navy')};
  }

  &.react-tabs__tab--selected {
    display: block;
    background-color: ${getColor('ikssBlue')};
    border-radius: 26px;
    color: ${getColor('white')};
    .tab-button {
      background: none;
      color: ${getColor('white')};
    }
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  background-color: ${getColor('blue10')};
  margin: 32px 0 64px 0;
  border-radius: 26px;
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
  padding: 64px 10%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  img {
    filter: invert(100%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
  }
`;

export const TitleWithDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;
export const ProjectTitle = styled(H4)`
  margin: 0 24px 0 0;
`;

export const ProjectDate = styled(H5)`
  color: ${getColor('steel')};
`;

export const ProjectDescription = styled.div`
  color: ${getColor('steel')};
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.015px;
`;

export const TabSecondaryBigButton = styled(SecondaryBigButton)`
  margin: 56px 0 148px 0;
  text-decoration: none;
`;

export const StyledVideo = styled.iframe`
  border: none;
  border-radius: 16px 16px 0 0;
`;

export const StyledImage = styled(Image)`
  border-radius: 16px 16px 0 0;
`;
