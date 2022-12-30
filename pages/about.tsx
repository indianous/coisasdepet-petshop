import React from 'react';
import Header from '../layout/header';
import Head from '../layout/head';

export default function About() {

  // meta data
  const meta = {
    title: 'Sobre',
    description: ''
  }

  return (
    <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
    </div>
    </>
  )
}
