/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import AppProviders from '@root/contextProviders/AppProviders';
import Layout from '../components/Layout/Layout';

const App = (props) => {
  const { Component, pageProps, commonApiElements, contactFormText, contactFormTooltip } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon-ikss.svg" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppProviders>
        <Hydrate state={pageProps ? pageProps.dehydratedState : null}>
          <Layout
            commonApiElements={commonApiElements}
            formContent={[contactFormText, contactFormTooltip]}
          >
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </AppProviders>
    </>
  );
};

App.getInitialProps = async () => {
  const commonApiElements = await contentfulClient.getBasicContent('common');
  const contactFormText = findApiElementByIdentifier(commonApiElements, 'contact-form-text');
  const contactFormTooltip = findApiElementByIdentifier(commonApiElements, 'contact-form-tooltip');

  return {
    commonApiElements,
    contactFormText,
    contactFormTooltip,
  };
};

export default App;
