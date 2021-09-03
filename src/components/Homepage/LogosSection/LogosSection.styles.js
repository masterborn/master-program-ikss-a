import styled from 'styled-components';
import { H3, BodyText } from '@root/components/typography/Typography';
import { medias } from '@root/styles/theme';

const { small } = medias;

export const LogosSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 148px;
`;

export const LogosTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 635px;
  margin: 0 auto 86px auto;

  @media ${small} {
    line-height: 32px;
    width: 327px;
  }
`;

export const LogosSectionHeader = styled(H3)`
  display: flex;
  margin-bottom: 32px;

  @media ${small} {
    font-size: 24px;
    line-height: 32px;
    width: 327px;
    justify-content: center;
  }
`;

export const StyledBodyText = styled(BodyText)`
  display: flex;
  justify-content: center;
  width: 635px;
  height: 64px;

  @media ${small} {
    font-size: 14px;
    line-height: 28px;
    width: 327px;
    text-align: center;
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
    cursor: pointer;
    display: flex;
    flex-basis: 20%;
    margin-bottom: 60px;
    justify-content: center;
  }

  @media ${small} {
    max-width: 327px;
    font-size: 24px;
    line-height: 32px;

    a {
      flex-basis: 30%;
      padding: 20px;
      margin-bottom: 60px;
      justify-content: center;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
