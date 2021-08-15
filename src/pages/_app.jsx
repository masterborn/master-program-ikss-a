/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import fetchApiData from '@root/api/api';
import Layout from '../components/Layout/Layout';

const App = (props) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps, commonApiElements } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout commonApiElements={commonApiElements}>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

App.getInitialProps = async () => {
  const commonApiElements = await fetchApiData('common');
  return {
    commonApiElements: commonApiElements.items,
  };
};

export default App;
