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
import fetchContentfulApi from '@root/api/ContentfulClient';
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
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          
            <Layout commonApiElements={commonApiElements}>
              <Component {...pageProps} />
            </Layout>
          
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

App.getInitialProps = async () => {
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');
  return {
    commonApiElements,
  };
};

export default App;
