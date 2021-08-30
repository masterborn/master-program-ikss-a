import React, { useState } from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import Image from 'next/image';
import { useModal } from '@root/hooks/useModal';
import { useScroll } from '@root/hooks/useScroll';
import PrimaryLogo from "../logos/PrimaryLogo";
import { Nav, LinksList, ContactButton, StyledLink, StyledIcon, Socials, MenuWrapper, BrgBtn, CloseBrgBtn, Layer, MobileMenuWrapper } from "./Navbar.styles";
import { Bars, Coolicon } from '../icons';

const Navbar = ({ socialMedias, links }) => {

    const [active, setActive] = useState(false);

    const { pathname } = useRouter();

    const { handleModal } = useModal();

    const { visible, scrollToForm } = useScroll();

    const handleClick = () => {
        if (pathname === '/') {
            setActive(false);
            scrollToForm();
        }
        else {
            setActive(false);
            handleModal('open');
        }
    };

    const getActivePath = (requiredPath, currentPath) => requiredPath === currentPath ? true : '';

    const menuLinks = links.map(({ title, path }) => (
        <li key={title}>
            <Link href={path} ><StyledLink active={getActivePath(path, pathname)}>{title}</StyledLink></Link>
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
            <Link href='/'>
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
                <ContactButton onClick={handleClick}>Skontaktuj się</ContactButton>
            </MenuWrapper>
            <BrgBtn onClick={() => setActive(true)}><Bars /></BrgBtn>
            <MobileMenuWrapper active={active}>
                <CloseBrgBtn onClick={() => setActive(false)}><Coolicon /></CloseBrgBtn>
                <LinksList>
                    {menuLinks}
                </LinksList>
                <ContactButton onClick={handleClick}>Skontaktuj się</ContactButton>
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