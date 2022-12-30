import Head from '../layout/head';
import styles from '../styles/Home.module.css';
import Header from '../layout/header';
import Carousel from '../layout/carousel';
import ListCardProduct from '../layout/list-card-product';

export default function Home() {

  // meta data
  const meta = {
    title: 'Lojinha',
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
        <main className="container">
          <Carousel id='banner1'/>
          <ListCardProduct/>
        </main>
      </div>
    </>
  )
}
