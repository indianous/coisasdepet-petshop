import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../layout/header'
import Footer from '../layout/footer'

export default function Document (): JSX.Element {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
