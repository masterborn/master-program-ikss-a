import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import Image from 'next/image';
import { useModal } from '@root/hooks/useModal';
import { useScroll } from '@root/hooks/useScroll';
import PrimaryLogo from "../logos/PrimaryLogo";
import { Nav, LinksList, ContactButton, StyledLink, Socials } from "./Navbar.styles";

const Navbar = ({ socialMedias, links }) => {

    const { pathname } = useRouter();

    const { handleModal } = useModal();

    const { visible, scrollToForm } = useScroll();

    const handleClick = () => {
        if (pathname === '/') scrollToForm();
        else handleModal('open');
    };

    const getActivePath = (requiredPath, currentPath) => requiredPath === currentPath ? true : '';

    return (
        <Nav >
            <Link href='/'>
                <StyledLink>
                    <PrimaryLogo />
                </StyledLink>
            </Link>
            <LinksList>
                {
                    links.map(({ title, path }) => (
                        <li key={title}>
                            <Link href={path} ><StyledLink active={getActivePath(path, pathname)}>{title}</StyledLink></Link>
                        </li>))
                }
            </LinksList>
            <Socials visible={visible}>
                {
                    socialMedias.map(({ circleLogo, url, title }) => (
                        <a
                            href={url}
                            key={title}
                            target='_blank'
                            rel='noreferrer'
                            aria-label={title}
                        >
                            <Image src={circleLogo} />

                        </a>
                    ))
                }
            </Socials>
            <ContactButton onClick={handleClick}>Skontaktuj się</ContactButton>
        </Nav>
    );
};

Navbar.propTypes = {
    socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Navbar;