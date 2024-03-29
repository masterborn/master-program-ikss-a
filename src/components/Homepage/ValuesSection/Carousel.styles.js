import styled from 'styled-components';

import { getColor } from '@root/styles/utils';

export const Embla = styled.div`
  display: none;
  width: 100%;

  @media ${({ theme }) => theme.medias.medium} {
    display: block;
  }
`;

export const EmblaViewport = styled.div`
  cursor: grabbing;
`;

export const EmblaContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  position: relative;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  background-color: ${getColor('white')};
  flex: 0 0 100%;

  &:nth-child(2) {
    margin: 0 24px;
  }
`;

export const EmblaDots = styled.div`
  list-style: none;
  justify-content: center;
  padding-top: 10px;
  display: none;

  @media ${({ theme }) => theme.medias.medium} {
    display: flex;
  }
`;

export const EmblaDot = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  border: 0;
  margin: 24px 8px 0 8px;
  display: flex;

  &:after {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: solid 1px ${getColor('ikssBlue')};
    content: '';
  }

  &.is-selected:after {
    background-color: ${getColor('ikssBlue')};
    opacity: 1;
  }
`;
