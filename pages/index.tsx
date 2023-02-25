import { type } from "os";
import React from "react";
import { Product } from "../entities/Product";
import Head from "../layout/head";
// import styles from '../styles/Home.module.css';
import ListCardProduct from "../layout/list-card-product";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/products/");
  const data: any = await response.json();
  const products: any[] = data.products;
  return {
    props: {
      data: products,
    },
  };
}

interface IProps {
  data: Array<any>;
}

export default function Home({ data }: IProps): JSX.Element {
  // meta data
  const meta = {
    title: "Lojinha",
    description: "",
  };
  const products: Product[] = data.map((item: any) => {
    const { description, dimension, id, name, price, slug, images } = item;
    const product = new Product({
      description,
      dimension,
      id,
      name,
      price,
      slug,
      images,
    });
    return product;
  });
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
          <ListCardProduct products={products} />
        </main>
      </div>
    </>
  );
}
