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
    <div className={`card ${props.className}`}>
        <img src={product.images[0]} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text fs-4">{product.description}</p>
            <p className="card-text fs-6">R&#36;{product.price}</p>
            <Link href={`product/${product.slug}`} className="btn btn-primary stretched-link">Veja Mais...</Link>
        </div>
    </div>
  )
}
