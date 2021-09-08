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
    <FooterWrapper homepage={pathname === routes.homepage}>
      <FooterLinksWrapper homepage={pathname === routes.homepage}>
        {links.map(({ title, path }) => (
          <Link key={title} href={path}>
            <ResponsiveButton>{title}</ResponsiveButton>
          </Link>
        ))}
      </FooterLinksWrapper>
      <FooterSocialIconsWrapper>
        {socialMedias.map(({ title, url, logo }) => (
          <a key={title} href={url} aria-label={title}>
            <Image src={logo} />
          </a>
        ))}
      </FooterSocialIconsWrapper>
      <Link href={routes.homepage}>
        <a href={routes.homepage}>
          <LogoWrapper>
            <Image src={ikssLogo} layout="fill" />
          </LogoWrapper>
        </a>
      </Link>
      <SmallBodyText>{copyrightText}</SmallBodyText>
      <NoDecorationLink href="https://masterborn.com/">
        <SmallBodyText>Made with</SmallBodyText>
        <HeartWrapper>
          <Image src={heartIcon} />
        </HeartWrapper>
        <SmallBodyText>by MasterBorn Software</SmallBodyText>
      </NoDecorationLink>
      <ButtonCircle homepage={pathname === routes.homepage} type="button" onClick={scrollToTop}>
        <Image src={upArrow} />
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
