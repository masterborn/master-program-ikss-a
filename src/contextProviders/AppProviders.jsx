import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { ModalProvider } from "@root/contextProviders/useModal";
import { ScrollProvider } from "@root/contextProviders/useScroll";
import GlobalStyles from '@root/styles/GlobalStyles';
import { theme } from "@root/styles/theme";


const AppProviders = ({ children }) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>
          <GlobalStyles />
        </ModalProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
