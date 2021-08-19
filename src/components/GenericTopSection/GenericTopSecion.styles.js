import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { H1 } from '../typography/Typography';

export const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 995px;
  margin: 64px auto 80px auto;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled(H1)`
  margin: 16px 0 32px 0;
`;

export const StyledSubpageDecription = styled.div`
  color: ${getColor('steel')};
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.015px;
  text-align: center;
`;
