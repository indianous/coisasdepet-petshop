import React from 'react'
import { Product } from '../interface/Product'
import Link from './link'

interface Props {
  className: string
  product: Product
}

export default function CardProduct (props: Props): JSX.Element {
  const product = props.product
  return (
    <div className="card">
      <div className="row g-0 p-2">
        <div className="col-4 p-3">
          <img src={product.images[0]} alt="..." className="img-fluid"/>
        </div>
        <div className="col-8 ps-2 d-flex flex-column">
          <div className="border-bottom">
            <h3>{product.name}</h3>
          </div>
          <div className="pt-5">
            <span>Por: R&#36;{product.price}</span>
          </div>
        </div>
        <div className="d-flex flex-column btn-group-vertical">
          <Link href={`product/${product.slug}`} className="btn bg-primary">Comprar</Link>
          <button className="btn bg-success">Adicionar ao carrinho</button>
        </div>
      </div>
  </div>
  )
}
