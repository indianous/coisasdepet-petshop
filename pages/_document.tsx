import { Html, Head, Main, NextScript } from 'next/document';
import Header from '../layout/header';
import Footer from '../layout/footer';

export default function Document() {
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
