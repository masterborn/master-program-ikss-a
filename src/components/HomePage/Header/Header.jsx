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
  HeroHeading,
  HeroLinks,
  HeroBodyText,
  HeroSecondaryBigButton,
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
          </LeftBlock>
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
        </MainContent>
        <HeaderSocialMediaWrapper>
          <Socials ref={socialsRef}>
            {socialMedias.map(({ circleLogo, url, title }) => (
              <a href={url} key={title} target="_blank" rel="noreferrer" aria-label={title}>
                <Image src={circleLogo} alt={title} width={48} height={48} />
                <HeroLinks>{title}</HeroLinks>
              </a>
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
