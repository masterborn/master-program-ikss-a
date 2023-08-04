import styled from 'styled-components';

import { H3, BodyText } from '@root/components/typography/Typography';
import { getColor, getFontSize, getLineHeight } from '@root/styles/utils';

export const TeamWrapper = styled.section`
  max-width: 996px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 100%;
    border-radius: 16px;

    @media ${({ theme }) => theme.medias.medium} {
      border-radius: 8px;
    }
  }

  @media (max-width: 1100px) {
    padding: 0 24px;
  }

  @media ${({ theme }) => theme.medias.medium} {
    margin-top: 80px;
  }
`;

export const TeamHeading = styled(H3)`
  color: ${getColor('navy')};
  margin: 0 auto;

  @media ${({ theme }) => theme.medias.medium} {
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
  }
`;

export const TeamDescription = styled(BodyText)`
  max-width: 635px;
  margin: 32px auto 64px;
  color: ${getColor('steel')};

  @media ${({ theme }) => theme.medias.medium} {
    margin: 16px auto 32px;
  }
`;
