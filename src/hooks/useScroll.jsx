import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';

const ScrollContext = React.createContext({});

export const ScrollProvider = ({ children }) => {

    const [visible, setVisible] = useState(false);

    const [activeScroll, setActiveScroll] = useState(true);

    const { pathname } = useRouter();

    const scrollToForm = () => {
        const formWrapper = document.querySelector('.ContactFormstyles__FormWrapper-sc-5ntnha-0');
        let counter = window.scrollY;

        if (counter === 0) setActiveScroll(true);

        const scroll = setInterval(() => {
            if (activeScroll) {
                counter += 150;
                window.scrollTo(0, counter);
            }
            if (counter > formWrapper.offsetTop - (window.innerHeight / 4)) {
                setActiveScroll(false);
                clearInterval(scroll);
            }
        }, 1);
    };

    const handleScroll = useCallback(() => {
        if (pathname === '/') {
            const formWrapper = document.querySelector('.ContactFormstyles__FormWrapper-sc-5ntnha-0');
            const socials = document.querySelector('.Headerstyles__Socials-sc-16385vz-5');

            if (socials && window.scrollY >= socials.offsetTop + socials.offsetHeight / 2) {
                setVisible(true);
            } else setVisible(false)

            if (formWrapper && window.scrollY < formWrapper.offsetTop - window.innerHeight / 4) {
                setActiveScroll(true);
            }
        } else if (pathname !== '/') {
            if (window.scrollY >= window.innerHeight / 2) {
                setVisible(true)
            }
            else setVisible(false)
        }
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return <ScrollContext.Provider value={{ visible, scrollToForm }}>{children}</ScrollContext.Provider>;
}

ScrollProvider.propTypes = {
    children: PropTypes.node.isRequired
}


export const useScroll = () => {
    const scrollContext = useContext(ScrollContext);

    if (!scrollContext) {
        throw Error('useScroll needs to be used inside ScrollProvider')
    }

    return scrollContext
}
