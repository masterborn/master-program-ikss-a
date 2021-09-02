import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import routes from '@root/handlers/routes';

const ScrollContext = React.createContext({});

export const ScrollProvider = ({ children }) => {

    const [visible, setVisible] = useState(false);

    const { pathname } = useRouter();

    const formRef = useRef(null);

    const socialsRef = useRef(null);

    const scrollToForm = () => formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    const handleScroll = useCallback(() => {
        if (pathname === routes.homepage) {
            if (socialsRef.current && window.scrollY >= socialsRef.current.offsetTop + socialsRef.current.offsetHeight / 2) {
                setVisible(true);
            } else setVisible(false)

        } else if (pathname !== routes.homepage) {
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


    return <ScrollContext.Provider value={{ visible, scrollToForm, formRef, socialsRef }}>{children}</ScrollContext.Provider>;
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
