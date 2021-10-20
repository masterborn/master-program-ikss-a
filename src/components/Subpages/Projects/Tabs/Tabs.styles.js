import styled from 'styled-components';
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
import { BigButton } from '@root/components/Button/Button.styles';

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
);

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 0;
  a {
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    padding: 0 24px;
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  background-color: ${getColor('blue10')};
  margin: 0 0 48px 0;
  border-radius: 26px;
  @media ${({ theme }) => theme.medias.medium} {
    margin: 0 0 60px 0;
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

export const ResponsiveButton = styled(BigButton)`
  &:hover {
    opacity: 0.8;
  }
  @media ${({ theme }) => theme.medias.medium} {
    height: 36px;
    padding: 9px 16px;
    line-height: 18px;
    font-size: 10px;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
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
  padding: 32px 32px 40px 32px;
  @media ${({ theme }) => theme.medias.medium} {
    padding: 24px 24px 32px 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  img {
    filter: invert(100%) sepia(94%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);
  }
  @media ${({ theme }) => theme.medias.medium} {
    margin: 0 auto 0 auto;
  }
`;

export const TitleWithDateContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 32px;
  @media ${({ theme }) => theme.medias.medium} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;
export const ProjectTitle = styled(H4)`
  color: ${getColor('navy')};
  margin: 0 24px 0 0;
  @media ${({ theme }) => theme.medias.medium} {
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 8px 0;
  }
`;

export const ProjectDate = styled(H5)`
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
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
  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 16px 16px 0 0;
`;

export const ProjectWrapper = styled.div`
  background: ${getColor('white')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  break-inside: avoid;
  transform: translateZ(0);
  margin-bottom: 24px;

  @media ${({ theme }) => theme.medias.medium} {
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
`;

export const StyledCtaSection = styled.section`
  background-color: ${getColor('blue10')};
  height: 352px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 92px 0;
  text-align: center;
  @media ${({ theme }) => theme.medias.medium} {
    height: 220px;
    margin: 32px 0;
    padding: 0 31px 0 31px;
  }
`;

export const StyledCtaText = styled(H3)`
  @media ${({ theme }) => theme.medias.medium} {
    font-weight: ${getFontWeight('h5')};
    font-size: ${getFontSize('h5')};
    line-height: ${getLineHeight('h5')};
    letter-spacing: ${getLetterSpacing('h5')};
  }
`;

export const FirstProjectsSection = styled.div`
  column-count: ${({ oneProject }) => (oneProject ? 'auto' : '2')};
  display: ${({ oneProject }) => (oneProject ? 'flex' : 'block')};
  column-gap: 24px;
  width: ${({ oneProject }) => (oneProject ? '50%' : '100%')};

  @media ${({ theme }) => theme.medias.medium} {
    column-count: 1;
    width: 100%;
  }
`;

export const SecondProjectsSection = styled(FirstProjectsSection)``;

export const CtaButton = styled(ResponsiveButton)`
  margin-top: 32px;
  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 24px;
  }
`;

export const Wrapper = styled.div``;
