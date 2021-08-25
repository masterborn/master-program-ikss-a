import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
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
  const [activeScroll, setActiveScroll] = React.useState(true);
  const { pathname } = useRouter();

  const handleClick = () => {
    if (pathname === '/') {
      // the form doesn't exist so this function provides scrolling to the footer for now
      const footer = document.querySelector('footer');
      let counter = window.scrollY;

      if (counter === 0) setActiveScroll(true);

      const scroll = setInterval(() => {
        if (activeScroll) {
          counter += 60;
          window.scrollTo(0, counter);
        }
        if (counter > footer.offsetTop - window.innerHeight) {
          setActiveScroll(false);
          clearInterval(scroll);
        }
      }, 1);
    }
  };

  const handleScroll = React.useCallback(() => {
    const footer = document.querySelector('footer');

    if (window.scrollY < footer.offsetTop - window.innerHeight) {
      setActiveScroll(true);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <HeroSection>
        <MainContent>
          <LeftBlock>
            <HeroHeading>{headerTitle}</HeroHeading>
            <HeroBodyText>{text}</HeroBodyText>
            <HeroSecondaryBigButton alt="CTA" onClick={handleClick}>
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
          <Socials>
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
