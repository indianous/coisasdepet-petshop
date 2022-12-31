import React from 'react';
import { Product } from '../interface/Product';
import Link from './link';

type Props = {
    className?: string;
    product?: Product;
}

export default function CardProduct(props: Props) {
    const product = props.product || new Product(
        'Produto 1',
        1.50,
        'Texto',
        'produto-1',
        [
            'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
            'https://images.pexels.com/photos/4032973/pexels-photo-4032973.jpeg'
        ]
    )
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
