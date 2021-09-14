import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { H1 } from '../typography/Typography';

export const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 995px;
  margin: ${({ projectsSubpage }) =>
    projectsSubpage ? '64px auto 80px auto' : '64px auto 148px auto'};
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.medias.medium} {
    margin: ${({ projectsSubpage }) =>
      projectsSubpage ? '32px auto 40px auto' : '32px auto 80px auto'};
    padding: 0 24px;
  }
`;

export const StyledHeader = styled(H1)`
  color: ${getColor('navy')};
  margin: 16px 0 32px 0;

  @media ${({ theme }) => theme.medias.medium} {
    margin: 8px 0 16px 0;
    font-size: 32px;
    line-height: 44px;
  }
`;

export const StyledSubpageDescription = styled.div`
  color: ${getColor('steel')};
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.015px;
  text-align: center;

  @media ${({ theme }) => theme.medias.medium} {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 142px;
  width: 230px;

  @media ${({ theme }) => theme.medias.medium} {
    height: 112px;
    width: 181px;
  }
`;
