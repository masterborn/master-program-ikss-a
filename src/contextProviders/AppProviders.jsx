import React, { useRef } from 'react';
import { theme } from '@root/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '@root/hooks/useModal';
import { ScrollProvider } from '@root/hooks/useScroll';
import { WindowSizeProvider } from '@root/hooks/useWindowSize';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from '@root/styles/GlobalStyles';
import PropTypes from 'prop-types';

const AppProviders = ({ children }) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ThemeProvider theme={theme}>
      <WindowSizeProvider>
        <ScrollProvider>
          <ModalProvider>
            <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>
            <GlobalStyles />
          </ModalProvider>
        </ScrollProvider>
      </WindowSizeProvider>
    </ThemeProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;