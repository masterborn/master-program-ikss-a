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
  Vid,
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
          <Vid>
            <iframe
              width="808px"
              height="505px"
              src={`https:${video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
            />
          </Vid>
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
                  <Image src={circleLogo} alt={title} width={24} height={24} />
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
