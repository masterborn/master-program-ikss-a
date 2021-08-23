import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { BigButton } from '@root/components/Button/Button.styles';

export const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 164px auto 148px auto;
  text-align: center;
  max-width: 635px;
`;

export const StyledBigButton = styled(BigButton)`
  margin-top: 32px;
`;

export const StyledBodyText = styled.div`
  margin: 32px 0 32px 0;
  color: ${getColor('steel')};
  line-height: 32px;
  letter-spacing: -0.015em;
  font-size: 16px;
`;
