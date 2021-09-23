import React from 'react';
import Image from 'next/image';
import { useScroll } from '@root/contextProviders/useScroll';
import PropTypes, { oneOfType } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  Wrapper,
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
} from './Header.styles';

const Header = ({ headerTitle, text, video, socialMedias }) => {
  const { socialsRef, scrollToForm } = useScroll();

  return (
    <Wrapper>
      <HeroSection>
        <MainContent>
          <LeftBlock>
            <HeroHeading>{headerTitle}</HeroHeading>
            <HeroBodyText as='div' >{documentToReactComponents(text)}</HeroBodyText>
            <HeroButton alt="CTA" onClick={scrollToForm}>
              Skontaktuj się
            </HeroButton>
          </LeftBlock>
          <StyledVideo src={`https:${video}`} muted autoPlay loop />
        </MainContent>
        <HeaderSocialMediaWrapper>
          <Socials ref={socialsRef}>
            {socialMedias.map(({ circleLogo, url, title }) => (
              <>
                <StyledSocials href={url} key={title} rel="noreferrer" aria-label={title}>
                  <SocialLinkWrapper>
                    <SocialIconWrapper>
                      <Image src={circleLogo} alt={title} layout="fill" />
                    </SocialIconWrapper>
                    <HeroLink>{title}</HeroLink>
                  </SocialLinkWrapper>
                </StyledSocials>
              </>
            ))}
          </Socials>
        </HeaderSocialMediaWrapper>
      </HeroSection>
    </Wrapper>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  text: PropTypes.objectOf(oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])).isRequired,
  video: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
