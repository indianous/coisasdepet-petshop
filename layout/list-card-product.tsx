import React from 'react'
import CardProduct from './card-product'
import { Product } from '../interface/Product'

interface Props {
  className?: string
  title?: string
  products?: Product[]
}

export default function ListCardProduct (props: Props): JSX.Element {
  const title = props.title
  const product = new Product()
  const products = [product, product, product, product]
  return (
    <>
      <p className='h3 m-2'>{title}</p>
      <div className={'m-3 row row-cols-1 row-cols-md-3 g-4'}>
        {
          products.map(
            (product, index) => {
              return (
                <div key={index} className="col">
                  <CardProduct className='m-2' product={product}/>
                </div>
              )
            }
          )
        }
      </div>
    </>
  )
}
