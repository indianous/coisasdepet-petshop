import React from 'react'
import Head from '../layout/head'
import Link from '../layout/link'

// Interfaces

interface ShippingItemProps {
  radioId: string
  name: string
  price: string
  time: string
  id: string
}

interface ShippingProps {
  items: Array<{ name: string, price: number, time: string, id: string }>
}

interface ViewProps {
  items: Array<{ imgUrl: string, imgAlt: string, name: string, price: string, quantity: number }>
}

interface CartItemProps {
  imgUrl: string
  imgAlt: string
  name: string
  price: string
  quantity: number
}

interface ViewItemProps {
  imgUrl: string
  imgAlt: string
  name: string
  price: string
  quantity: number
}

// Components

export function Shipping (props: ShippingProps): JSX.Element {
  const shippingItems = props.items
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Entrega</h3>
      </div>
      <div className="card-body">
        <p className="card-text">
          Entregar: Endereço
        </p>
        <Link href='#'>alterar endereco</Link>
      </div>
      <ul className="list-group">
        {
          shippingItems.map(
            (item, index) => {
              const radioId = `radioshipping${index}`
              return (
                <ShippingItem
                  key={index}
                  radioId={radioId}
                  name={item.name}
                  price={`R$ ${item.price}`}
                  time={item.time}
                  id={item.id}
                />
              )
            }
          )
        }
      </ul>
      <div className="card-footer">
        Total: R$ 20,00
      </div>
    </div>
  )
}

export function Payment (): JSX.Element {
  return (
  <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          Pagamento
        </h3>
      </div>
      <div className="card-body">
        <div className='d-flex flex-column'>
          <label htmlFor="numberCard">Número do Cartão</label>
          <input type="text" name="numberCard" id="numberCard" />
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="numberCvv">CVV</label>
          <input type="text" name="numberCvv" id="numberCvv" />
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="expiry">Validade</label>
          <input type="text" name="expiry" id="expiry" />
        </div>
        <input type="submit" value="Pagar" />
      </div>
      <div className="card-footer">
        <span className="card-text">
          Total: R$ 120,00
        </span>
      </div>
    </div>
  )
}

export function ShippingItem (props: ShippingItemProps): JSX.Element {
  const radioId = props.radioId
  const name = props.name
  const price = props.price
  const time = props.time
  const id = props.id
  return (

    <li className="list-group-item">
      <input type="radio" className="form-check-input" name="shipping" id={radioId} value={id}/>
      <label htmlFor={radioId} className="form-check-label ps-2">
        <div><span>{name}</span></div>
        <div><span>{price}</span></div>
        <div><span>{time}</span></div>
      </label>
    </li>
  )
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
    <li className="list-group-item">
      <div className="row">
        <div className="col-4">
          <img src={item.imgUrl} className='img-fluid' alt="..." />
        </div>
        <div className="col-8">
        <span>{item.name}</span>
        <div className='d-flex justify-content-between'>
          <span className=''>{item.price}</span>
          <button className="btn badge bg-primary">{item.quantity} un</button>
        </div>
        </div>
      </div>
      <button className="btn badge position-absolute start-100 top-0 translate-middle rounded-pill bg-danger">X</button>
    </li>
  )
}

export function ViewItem (props: ViewItemProps): JSX.Element {
  const imgUrl = props.imgUrl
  const imgAlt = props.imgAlt
  const name = props.name
  const price = props.price
  const quantity = props.quantity
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4">
          <img src={imgUrl} alt={imgAlt} className="img-fluid" />
        </div>
        <div className="col-8">
          <div><span className="h5">{name}</span></div>
          <div>
            <div><span>{price}</span></div>
            <button className="btn badge bg-primary">{quantity} un</button>
          </div>
        </div>
      </div>
      <button className="btn badge position-absolute start-100 top-0 translate-middle rounded-pill bg-danger">X</button>
    </li>
  )
}

export function View (props: ViewProps): JSX.Element {
  const items = props.items
  return (
    <div className='card'>
      <div className="card-header">
        <h3 className='card-title'>Carrinho</h3>
      </div>
      <ul className="list-group">
        {
          items.map(
            (item, index) => {
              return (
                <ViewItem
                  key={index}
                  imgUrl={item.imgUrl}
                  imgAlt={item.imgAlt}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              )
            }
          )
        }
      </ul>
      <div className="card-footer">
        <span>Total: R$ 120,00</span>
      </div>
    </div>
  )
}

export default function Cart (): JSX.Element {
  const viewItems = [
    { imgUrl: 'https://images.pexels.com/photos/13779112/pexels-photo-13779112.jpeg', imgAlt: 'Caps Fosfiber', name: 'Fosfiber', price: 'R$ 120,00', quantity: 1 }
  ]
  const shippingItems = [
    { name: 'Retirada no local', price: 0.00, time: '1 dia', id: '1' },
    { name: 'Sedex', price: 18.90, time: 'De 7 a 15 dias', id: '2' },
    { name: 'Transportadora', price: 27.90, time: 'De 1 a 3 dias', id: '3' }
  ]
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
        <form action="">
          <View items={viewItems}/>
          <Shipping items={shippingItems}/>
          <Payment/>
        </form>
      </main>
    </>
  )
}
