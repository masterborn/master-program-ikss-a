import styled from 'styled-components';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getLetterSpacing,
} from '@root/styles/utils';
import { BigButton } from '@root/components/Button/Button.styles';
import { medias } from '@root/styles/theme';
import { H3 } from '../typography/Typography';

const { small } = medias;

export const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 164px auto 148px auto;
  text-align: center;
  max-width: 635px;

  @media ${small} {
    padding: 0 24px 0 24px;
    margin: ${({ projectsSubpage }) =>
      projectsSubpage ? '80px auto 103px auto' : '104px auto 131px auto'};
  }
`;

export const StyledHeader = styled(H3)`
  @media ${small} {
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
    letter-spacing: ${getLetterSpacing('h4')};
  }
`;

export const StyledBodyText = styled.div`
  margin: 32px 0 32px 0;
  color: ${getColor('steel')};
  line-height: 32px;
  letter-spacing: -0.015em;
  font-size: 16px;

  @media ${small} {
    margin: 16px 0 16px 0;
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
