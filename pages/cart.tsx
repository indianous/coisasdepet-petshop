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

interface CartItemProps {
  imgUrl: string
  imgAlt: string
  name: string
  price: string
  quantity: number
}

export function CartItem (props: CartItemProps): JSX.Element {
  const item = {
    imgUrl: props.imgUrl,
    imgAlt: props.imgAlt,
    name: props.name,
    price: props.price,
    quantity: props.quantity
  }
  return (
    <li className="list-group-item d-flex align-items-center justify-content-around">
      <img src={item.imgUrl} className='w-25' alt="..." />
      <div className='w-75 ps-2'>
      <span>{item.name}</span>
      <div className='d-flex justify-content-between'>
        <span className=''>{item.price}</span>
        <button className="btn badge bg-primary">{item.quantity} un</button>
      </div>
      </div>
      <button className="btn badge position-absolute start-100 top-0 translate-middle rounded-pill bg-danger">X</button>
    </li>
  )
}

// interface ViewProps {
//   listProduct
// }

export function View (): JSX.Element {
  const item = {
    imgUrl: 'https://images.pexels.com/photos/13779112/pexels-photo-13779112.jpeg',
    imgAlt: 'Caps Fosfiber',
    name: 'Fosfiber',
    price: 'R$ 120,00',
    quantity: 1
  }
  return (
    <div className='card'>
      <div className="card-header">
        <h3 className='card-title'>Carinho</h3>
      </div>
      <ul className="list-group">
        <CartItem imgUrl={item.imgUrl} imgAlt={item.imgAlt} name={item.name} price={item.price} quantity={item.quantity}/>
        <CartItem imgUrl={item.imgUrl} imgAlt={item.imgAlt} name={item.name} price={item.price} quantity={item.quantity}/>
      </ul>
      <div className="card-footer">
        <span>Total: R$ 120,00</span>
      </div>
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
