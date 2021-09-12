import styled from 'styled-components';
import { H3, BodyText } from '@root/components/typography/Typography';
import { getColor, getFontSize, getFontWeight, getLineHeight } from '@root/styles/utils';

export const LogosSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogosTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 635px;
  margin: 0 auto 42px auto;

  @media ${({ theme }) => theme.medias.medium} {
    line-height: 32px;
  }
`;

export const LogosSectionHeader = styled(H3)`
  display: flex;
  margin-bottom: 32px;
  color: ${getColor('navy')};
  @media ${({ theme }) => theme.medias.medium} {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
    justify-content: center;
    font-weight: ${getFontWeight('h4')};
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('h4')};
  }
`;

export const StyledBodyText = styled(BodyText)`
  display: flex;
  justify-content: center;
  color: ${getColor('steel')};
  @media ${({ theme }) => theme.medias.medium} {
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    font-size: ${getFontSize('bodySmall')};
  }
`;

export const PartnerLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1134px;
  margin: 0 auto 0 auto;
  a {
    display: flex;
    flex-basis: 20%;
    margin-bottom: 60px;
    justify-content: center;
  }

  @media ${({ theme }) => theme.medias.medium} {
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto 0 auto;
    a {
      flex-basis: 30%;
      padding: 20px;
      margin-bottom: 60px;
      justify-content: center;
    }
  }
`;
