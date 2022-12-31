import React from 'react';
import CardProduct from  './card-product';
import { Product } from '../interface/Product';

type Props = {
  className?: string;
  title?: string;
  products?: Product[];
}

export default function ListCardProduct(props: Props) {
  const title = props.title;
  const product = new Product(
    'Produto 1',
    1.50,
    'Texto',
    'produto-1',
    [
        'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
        'https://images.pexels.com/photos/4032973/pexels-photo-4032973.jpeg'
    ]
)
  const products = props.products || [product, product, product, product, ]
  return (
    <>
      <p className='h3 m-2'>{title}</p>
      <div className={`m-3 row row-cols-1 row-cols-md-3 g-4 ${props.className}`}>
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
