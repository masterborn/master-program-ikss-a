import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import routes from '@root/handlers/routes';
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
import ikssLogo from '../icons/svgs/logo-no-background-white.svg';
import { SmallBodyText } from '../typography/Typography';
import heartIcon from '../icons/svgs/heart-icon.svg';
import upArrow from '../icons/svgs/up-arrow.svg';

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
          <Link role="button" key={title} href={path} aria-label={title}>
            <ResponsiveButton>{title}</ResponsiveButton>
          </Link>
        ))}
      </FooterLinksWrapper>
      <FooterSocialIconsWrapper id="social">
        {socialMedias.map(({ title, url, logo }) => (
          <a role="button" key={title} href={url} aria-label={title}>
            <Image src={logo} alt="logo" />
          </a>
        ))}
      </FooterSocialIconsWrapper>
      <Link href={routes.homepage}>
        <a role="button" href={routes.homepage}>
          <LogoWrapper>
            <Image role="button" aria-label="homepage" src={ikssLogo} layout="fill" alt="logo" />
          </LogoWrapper>
        </a>
      </Link>
      <SmallBodyText>{copyrightText}</SmallBodyText>
      <NoDecorationLink
        role="button"
        aria-label="www.masterborn.com"
        href="https://masterborn.com/"
      >
        <SmallBodyText>Made with</SmallBodyText>
        <HeartWrapper>
          <Image src={heartIcon} alt="heart icon" />
        </HeartWrapper>
        <SmallBodyText>by MasterBorn Software</SmallBodyText>
      </NoDecorationLink>
      <ButtonCircle
        homepage={pathname === routes.homepage}
        type="button"
        aria-label="arrow-up"
        onClick={scrollToTop}
      >
        <Image src={upArrow} alt="arrow up" />
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
