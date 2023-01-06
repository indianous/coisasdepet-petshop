import React from 'react'
import Head from '../layout/head'

export function Shipping (): JSX.Element {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Shipping</h3>
      </div>
    </div>
  )
}

export function Payment (): JSX.Element {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Payment</h3>
      </div>
    </div>
  )
}

export function View (): JSX.Element {
  const listItem = {
    url: 'https://images.pexels.com/photos/13779112/pexels-photo-13779112.jpeg',
    title: 'Fosfiber',
    price: 'R$ 120,00'
  }
  return (
    <div className='card'>
      <div className="card-header">
        <h3 className='card-title'>Visualização</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center justify-content-around">
          <img src={listItem.url} className='w-25' alt="..." />
          <div className=''>
          <h5>{listItem.title}</h5>
          <div className='d-flex align-items-center'>
            <span className='d-block me-1'>{listItem.price}</span>
            <input className='mx-1'type="number" min='1' max='100'/>
            <button type="button" className="btn-close ms-1" aria-label="Close"></button>
          </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default function Cart (): JSX.Element {
  // const cart = {
  //   products: [
  //     {
  //       unity: {
  //         name: 'Abacaxi',
  //         image: 'https://images.pexels.com/photos/4412924/pexels-photo-4412924.jpeg',
  //         description: 'Fruta tropical.',
  //         price: 1.35
  //       },
  //       quantity: 1,
  //       total: 1
  //     },
  //     {
  //       unity: {
  //         name: 'Banana',
  //         image: 'https://images.pexels.com/photos/47305/bananas-banana-shrub-fruits-yellow-47305.jpeg',
  //         description: 'Fruta deliciosa.',
  //         price: 1.45
  //       },
  //       quantity: 1,
  //       total: 1
  //     },
  //     {
  //       unity: {
  //         name: 'Laranja',
  //         image: 'https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg',
  //         description: 'A melhor fruta que existe.',
  //         price: 2.05
  //       },
  //       quantity: 1,
  //       total: 1
  //     }
  //   ],
  //   subTotal: 12,
  //   tax: 13,
  //   shipping: 14,
  //   total: 15
  // }
  // meta data
  const meta = {
    title: 'Carrinho',
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
      <main className='container'>
        <View/>
        <Shipping/>
        <Payment/>
      </main>
    </>
  )
}
