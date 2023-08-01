import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useModal } from '@root/contextProviders/useModal';
import { useScroll } from '@root/contextProviders/useScroll';
import routes from '@root/handlers/routes';
import PrimaryLogo from '../logos/PrimaryLogo';
import Coolicon from '../icons/svgs/coolicon.svg';
import Bars from '../icons/svgs/bars.svg';
import {
  Nav,
  LinksList,
  ContactButton,
  StyledLink,
  StyledIcon,
  Socials,
  MenuWrapper,
  BrgButton,
  CloseBrgButton,
  Layer,
  MobileMenuWrapper,
} from './Navbar.styles';

const Navbar = ({ socialMedias, links }) => {
  const [active, setActive] = useState(false);

  const { pathname } = useRouter();

  const { handleModal } = useModal();

  const { visible, scrollToForm } = useScroll();

  const openContactModal = () => {
    setActive(false);
    handleModal('open');
  };

  const goToForm = () => {
    setActive(false);
    scrollToForm();
  };

  const getActivePath = (requiredPath, currentPath) => (requiredPath === currentPath ? true : '');

  const menuLinks = links.map(({ title, path }) => (
    <li key={title}>
      <Link legacyBehavior href={path} role="navigation">
        <StyledLink
          role="button"
          aria-label={title}
          onClick={() => {
            if (active) setActive(false);
          }}
          active={getActivePath(path, pathname)}
        >
          {title}
        </StyledLink>
      </Link>
    </li>
  ));

  const menuSocials = socialMedias.map(({ circleLogo, url, title }) => (
    <a href={url} key={title} role="button" aria-label={title} rel="noreferrer">
      <Image src={circleLogo} alt={title} />
    </a>
  ));

  return (
    <Nav>
      <Link legacyBehavior href={routes.homepage} role="button" aria-label="Redirect to homepage">
        <StyledIcon>
          <PrimaryLogo width="20px" alt="Ikss logo" aria-label="Ikss logo" />
        </StyledIcon>
      </Link>
      <MenuWrapper>
        <LinksList>{menuLinks}</LinksList>
        <Socials visible={visible}>{menuSocials}</Socials>
        <ContactButton onClick={pathname === routes.homepage ? goToForm : openContactModal}>
          Skontaktuj się
        </ContactButton>
      </MenuWrapper>
      <BrgButton onClick={() => setActive(true)}>
        <img src={Bars.src} alt="bars icon" />
      </BrgButton>
      <MobileMenuWrapper active={active}>
        <CloseBrgButton onClick={() => setActive(false)}>
          <img src={Coolicon.src} alt="close icon" />
        </CloseBrgButton>
        <LinksList>{menuLinks}</LinksList>
        <ContactButton onClick={pathname === routes.homepage ? goToForm : openContactModal}>
          Skontaktuj się
        </ContactButton>
        <Socials>{menuSocials}</Socials>
      </MobileMenuWrapper>
      <Layer active={active} onClick={() => setActive(false)} />
    </Nav>
  );
};
//  In objectOf logo and circleLogo I had to pass PropTypes.any instead of specify shape of object, because when I tried to use shape, in logo.src I defined PropTypes.string but warning was displayed in console object is expected instead of string as I defined don't know why

Navbar.propTypes = {
  socialMedias: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.objectOf(PropTypes.any).isRequired,
      circleLogo: PropTypes.objectOf(PropTypes.any).isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Navbar;
