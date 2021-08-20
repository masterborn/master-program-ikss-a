import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import Image from 'next/image';
import PrimaryLogo from "../logos/PrimaryLogo";
import { Nav, LinksList, ContactButton, StyledLink, Socials } from "./Navbar.styles";

const Navbar = ({ socialMedias, links }) => {

    const [visible, setVisible] = React.useState(false);

    const [activeScroll, setActiveScroll] = React.useState(true);

    const { pathname } = useRouter();

    const handleClick = () => {
        if (pathname === '/') {
            // form doesn't exist so this function provide scrolling to footer for now
            const footer = document.querySelector('footer');
            let counter = window.scrollY;

            if (counter === 0) setActiveScroll(true);

            const scroll = setInterval(() => {
                if (activeScroll) {
                    counter += 60;
                    window.scrollTo(0, counter);
                }
                if (counter > footer.offsetTop - window.innerHeight) {
                    setActiveScroll(false);
                    clearInterval(scroll);
                }
            }, 1);
        } else {
            // handling open modal with form here
        }
    };

    const handleScroll = React.useCallback(() => {
        const footer = document.querySelector('footer');

        if (window.scrollY >= window.innerHeight) {
            setVisible(true);
        } else setVisible(false)

        if (window.scrollY < footer.offsetTop - window.innerHeight) {
            setActiveScroll(true);
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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