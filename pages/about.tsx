import React from 'react'
import Head from '../layout/head'

export default function About (): JSX.Element {
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
