import React, { useState } from "react";
import { Product } from "../../entities/Product";
import Head from "../../layout/head";
import Gallery from "../../layout/gallery";
import { GetStaticPaths, GetStaticProps } from "next";
import { response } from "express";
import { useRouter } from "next/router";

interface Props {
  data: any;
}

export async function getStaticPaths(context: any) {
  const response = await fetch("http://localhost:3333/products");
  const data: any = await response.json();
  const paths = data.products.map((product: any) => {
    return { params: { slug: product.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const response = await fetch(`http://localhost:3333/product/slug/${slug}`);
  const { product } = await response.json();
  return {
    props: {
      data: { product },
    },
  };
}

export default function Main({ data }: Props): JSX.Element {
  if (!data) {
    return (
      <>
        <h1>Loadind...</h1>
      </>
    );
  } else {
    const product = new Product(data.product);
    const meta = {
      title: product.name,
      description: "",
    };
    const [quantity, setQuantity] = useState(1);
    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="container d-flex flex-column">
            <div className="d-flex flex-column flex-md-row row">
              <div className="col-md-4">
                {/* <Gallery id='galery-product' imgs={product.images} className='rounded'/> */}
              </div>
              <div className="card col-md-8 p-0">
                <div className="card-header">
                  <h1 className="card-title">{product.name}</h1>
                </div>
                <div className="card-body d-flex flex-column justify-content-evenly">
                  <div className="m-2">
                    <span className="h3">R$ {product.price}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <label htmlFor="quantity">Quantidade: </label>
                    </div>
                    <div className="input-group">
                      <button
                        className="input-group-text"
                        onClick={() => {
                          if (quantity > 0) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        <span>-</span>
                      </button>
                      <span className="btn input-group-text">{quantity}</span>
                      <button
                        className="input-group-text"
                        onClick={() => {
                          if (quantity < 100) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Descrição</h3>
                  <p className="card-text">{product.description}</p>
                  <button className="btn bg-success text-light">
                    Adicionar ao Carrinho!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
