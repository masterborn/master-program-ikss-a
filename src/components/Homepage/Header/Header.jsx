import React from 'react';
import Image from 'next/image';
import { useScroll } from '@root/contextProviders/useScroll';
import PropTypes from 'prop-types';
import {
  HeroSection,
  MainContent,
  LeftBlock,
  HeaderSocialMediaWrapper,
  Socials,
  StyledSocials,
  StyledMobileSocials,
  StyledVideo,
  HeroHeading,
  HeroLinks,
  HeroBodyText,
  HeroSecondaryBigButton,
  HeroSmallButton,
} from './Header.styles';

const Header = ({ headerTitle, text, video, socialMedias }) => {
  const { socialsRef, scrollToForm } = useScroll();

  return (
    <>
      <HeroSection>
        <MainContent>
          <LeftBlock>
            <HeroHeading>{headerTitle}</HeroHeading>
            <HeroBodyText>{text}</HeroBodyText>
            <HeroSecondaryBigButton alt="CTA" onClick={scrollToForm}>
              Skontaktuj się
            </HeroSecondaryBigButton>
            <HeroSmallButton alt="CTA" onClick={scrollToForm}>
              Skontaktuj się
            </HeroSmallButton>
          </LeftBlock>
          <StyledVideo src={`https:${video}`} muted autoPlay loop />
        </MainContent>
        <HeaderSocialMediaWrapper>
          <Socials ref={socialsRef}>
            {socialMedias.map(({ circleLogo, url, title }) => (
              <>
                <StyledSocials href={url} key={title} rel="noreferrer" aria-label={title}>
                  <Image src={circleLogo} alt={title} width={48} height={48} />
                  <HeroLinks>{title}</HeroLinks>
                </StyledSocials>
                <StyledMobileSocials href={url} key={url} rel="noreferrer">
                  <Image src={circleLogo} alt={title} width={32} height={32} />
                </StyledMobileSocials>
              </>
            ))}
          </Socials>
        </HeaderSocialMediaWrapper>
      </HeroSection>
    </>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
