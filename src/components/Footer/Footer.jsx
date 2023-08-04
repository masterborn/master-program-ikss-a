import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import routes from '@root/handlers/routes';

import heartIcon from '../icons/svgs/heart-icon.svg';
import ikssLogo from '../icons/svgs/logo-no-background-white.svg';
import upArrow from '../icons/svgs/up-arrow.svg';
import { SmallBodyText } from '../typography/Typography';

import {
  FooterWrapper,
  ResponsiveButton,
  FooterLinksWrapper,
  FooterSocialIconsWrapper,
  LogoWrapper,
  HeartWrapper,
  NoDecorationLink,
  ButtonCircle,
} from './Footer.styles';

const Footer = ({ copyrightText, links, socialMedias }) => {
  const { pathname } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper
      homepage={pathname === routes.homepage}
      aria-labelledby="social"
      role="contentinfo"
    >
      <FooterLinksWrapper homepage={pathname === routes.homepage}>
        {links.map(({ title, path }) => (
          <Link legacyBehavior key={title} href={path} aria-label={title}>
            <ResponsiveButton>{title}</ResponsiveButton>
          </Link>
        ))}
      </FooterLinksWrapper>
      <FooterSocialIconsWrapper id="social">
        {socialMedias.map(({ title, url, logo }) => (
          <a role="button" key={title} href={url} aria-label={title}>
            <Image src={logo} alt={title} />
          </a>
        ))}
      </FooterSocialIconsWrapper>
      <Link legacyBehavior href={routes.homepage}>
        <a href={routes.homepage} role="button" aria-label="Redirect to homepage">
          <LogoWrapper>
            <Image
              src={ikssLogo}
              layout="fill"
              role="button"
              aria-label="Redirect to homepage"
              alt="Ikss logo"
            />
          </LogoWrapper>
        </a>
      </Link>
      <SmallBodyText>{copyrightText}</SmallBodyText>
      <NoDecorationLink
        href="https://masterborn.com/"
        rel="noreferrer"
        role="button"
        aria-label="www.masterborn.com"
      >
        <SmallBodyText>Made with</SmallBodyText>
        <HeartWrapper>
          <Image src={heartIcon} alt="Heart icon" />
        </HeartWrapper>
        <SmallBodyText>by MasterBorn Software</SmallBodyText>
      </NoDecorationLink>
      <ButtonCircle
        homepage={pathname === routes.homepage}
        name="scroll-up-button"
        type="button"
        onClick={scrollToTop}
        aria-label="arrow-up"
      >
        <Image src={upArrow} alt="Scroll up" />
      </ButtonCircle>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  copyrightText: PropTypes.string.isRequired,
};

export default Footer;
