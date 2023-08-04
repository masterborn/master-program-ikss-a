import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import PropTypes, { oneOfType } from 'prop-types';

import { useScroll } from '@root/contextProviders/useScroll';

import {
  HeaderWrapper,
  HeroSection,
  MainContent,
  LeftBlock,
  HeaderSocialMediaWrapper,
  Socials,
  StyledSocials,
  StyledVideo,
  HeroHeading,
  HeroLink,
  HeroBodyText,
  HeroButton,
  SocialIconWrapper,
  SocialLinkWrapper,
  Wrapper,
} from './Header.styles';

const Header = ({ headerTitle, text, video, socialMedias }) => {
  const { socialsRef, scrollToForm } = useScroll();

  return (
    <HeaderWrapper>
      <HeroSection>
        <MainContent>
          <LeftBlock>
            <HeroHeading>{headerTitle}</HeroHeading>
            <HeroBodyText as="div">{documentToReactComponents(text)}</HeroBodyText>
            <HeroButton alt="CTA" onClick={scrollToForm}>
              Skontaktuj się
            </HeroButton>
          </LeftBlock>
          <StyledVideo
            src={`https:${video}`}
            muted
            playsInline
            autoPlay
            loop
            role="tooltip"
            aria-label="Video showing IKSS memebers and events they have organised"
          />
        </MainContent>
        <HeaderSocialMediaWrapper>
          <Socials ref={socialsRef}>
            {socialMedias.map(({ circleLogo, url, title }) => (
              <Wrapper key={title}>
                <StyledSocials href={url} rel="noreferrer" aria-label={title}>
                  <SocialLinkWrapper>
                    <SocialIconWrapper>
                      <Image src={circleLogo} alt={title} layout="fill" />
                    </SocialIconWrapper>
                    <HeroLink>{title}</HeroLink>
                  </SocialLinkWrapper>
                </StyledSocials>
              </Wrapper>
            ))}
          </Socials>
        </HeaderSocialMediaWrapper>
      </HeroSection>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  text: PropTypes.objectOf(oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]))
    .isRequired,
  video: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
