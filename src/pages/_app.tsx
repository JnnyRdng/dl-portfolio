import Layout from "@/components/shared/Layout";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import '@/styles/globals.scss';
import { Oxygen, Pirata_One } from "next/font/google";

const oxygen = Oxygen({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const pirata = Pirata_One({
  weight: ["400"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${oxygen.style.fontFamily};
          }
          .fancy-font {
            font-family: ${pirata.style.fontFamily};
          }
      `}
      </style>
      <Layout>
        <Head>
          <title>Dan Lester</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
