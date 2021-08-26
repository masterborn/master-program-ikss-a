import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <WindowSizeContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

WindowSizeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const useWindowSize = () => {
  const windowSizeContext = useContext(WindowSizeContext);

  return windowSizeContext;
};
