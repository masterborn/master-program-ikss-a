import React, { useState } from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import Image from 'next/image';
import { useModal } from '@root/contextProviders/useModal';
import { useScroll } from '@root/contextProviders/useScroll';
import routes from '@root/handlers/routes';
import PrimaryLogo from "../logos/PrimaryLogo";
import Coolicon from '../icons/svgs/coolicon.svg';
import Bars from '../icons/svgs/bars.svg';
import { Nav, LinksList, ContactButton, StyledLink, StyledIcon, Socials, MenuWrapper, BrgButton, CloseBrgButton, Layer, MobileMenuWrapper } from "./Navbar.styles";


const Navbar = ({ socialMedias, links }) => {

    const [active, setActive] = useState(false);

    const { pathname } = useRouter();

    const { handleModal } = useModal();

    const { visible, scrollToForm } = useScroll();

    const goToForm = () => {
        setActive(false);
        scrollToForm();
    };

    const openContactModal = () => {
        setActive(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        handleModal('open');
    };

    const getActivePath = (requiredPath, currentPath) => requiredPath === currentPath ? true : '';

    const menuLinks = links.map(({ title, path }) => (
        <li key={title}>
            <Link href={path} ><StyledLink onClick={() => { if (active) setActive(false) }} active={getActivePath(path, pathname)}>{title}</StyledLink></Link>
        </li>));

    const menuSocials = socialMedias.map(({ circleLogo, url, title }) => (
        <a
            href={url}
            key={title}
            aria-label={title}
        >
            <Image src={circleLogo} />
        </a>
    ));

    return (
        <Nav >
            <Link href={routes.homepage}>
                <StyledIcon>
                    <PrimaryLogo />
                </StyledIcon>
            </Link>
            <MenuWrapper >
                <LinksList>
                    {menuLinks}
                </LinksList>
                <Socials visible={visible}>
                    {menuSocials}
                </Socials>
                <ContactButton onClick={pathname === routes.homepage ? goToForm : openContactModal}>Skontaktuj się</ContactButton>
            </MenuWrapper>
            <BrgButton onClick={() => setActive(true)}><img src={Bars.src} alt='bars icon' /></BrgButton>
            <MobileMenuWrapper active={active}>
                <CloseBrgButton onClick={() => setActive(false)}><img src={Coolicon.src} alt='close icon' /></CloseBrgButton>
                <LinksList>
                    {menuLinks}
                </LinksList>
                <ContactButton onClick={pathname === routes.homepage ? goToForm : openContactModal}>Skontaktuj się</ContactButton>
                <Socials>
                    {menuSocials}
                </Socials>
            </MobileMenuWrapper>
            <Layer active={active} />
        </Nav>
    );
};
//  In objectOf logo and circleLogo I had to pass PropTypes.any instead of specify shape of object, because when I tried to use shape, in logo.src I defined PropTypes.string but warning was displayed in console object is expected instead of string as I defined don't know why

Navbar.propTypes = {
    socialMedias: PropTypes.arrayOf(PropTypes.shape({
        logo: PropTypes.objectOf(PropTypes.any).isRequired,
        circleLogo: PropTypes.objectOf(PropTypes.any).isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })).isRequired,
    links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default Navbar;