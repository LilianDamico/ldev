import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Menu from '../components/menu/Menu';

function Index() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lilian.Developer" />
        <meta name="description" content="Site sobre desenvolvimento de sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>L.Dev</title>
      </Head>
      <Menu />

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        strategy="beforeInteractive" />

      <Script src="/custom.js" strategy="afterInteractive" />
    </div>
  );
}

export default Index;
