import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  FooterWrapper,
  FooterLinksWrapper,
  FooterSocialIconsWrapper,
  CustomLink,
  NoDecorationLink,
  ButtonCircle,
} from './Footer.styles';
import LogoNoBackgroundWhite from '../logos/LogoNoBackgroundWhite';
import { SmallBodyText } from '../typography/Typography';
import heartIcon from '../icons/svgs/heart-icon.svg';
import ImageWrapper from '../wrappers/ImageWrapper';

import upArrow from '../icons/svgs/up-arrow.svg';

const Footer = ({ copyrightText, links, socialMedias }) => {
  const { pathname } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FooterWrapper height={pathname === '/' ? '728px' : '404px'}>
        <FooterLinksWrapper>
          {links.map(({ title, path }) => (
            <Link key={title} href={path}>
              <CustomLink>{title}</CustomLink>
            </Link>
          ))}
        </FooterLinksWrapper>
        <FooterSocialIconsWrapper>
          {socialMedias.map(({ title, url, logo }) => (
            <a key={title} target="_blank" href={url} rel="noreferrer" aria-label={title}>
              <Image src={logo} />
            </a>
          ))}
        </FooterSocialIconsWrapper>
        <Link href="/">
          <a href="/">
            <LogoNoBackgroundWhite margin="48px 0 56px 0" height="48px" width="84px" />
          </a>
        </Link>

        <SmallBodyText>{copyrightText}</SmallBodyText>
        <NoDecorationLink target="_blank" href="https://masterborn.com/" rel="noreferrer">
          <SmallBodyText>Made with</SmallBodyText>
          <ImageWrapper margin="0 6px 0 6px">
            <Image src={heartIcon} />
          </ImageWrapper>
          <SmallBodyText>by MasterBorn Software</SmallBodyText>
        </NoDecorationLink>
        <ButtonCircle type="button" onClick={scrollToTop}>
          <Image src={upArrow} />
        </ButtonCircle>
      </FooterWrapper>
    </>
  );
};

Footer.propTypes = {
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  copyrightText: PropTypes.string.isRequired,
};

export default Footer;
