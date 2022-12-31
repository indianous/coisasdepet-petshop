import React from 'react'
import { Product } from '../../interface/Product'
import Head from '../../layout/head'
import Carousel from '../../layout/carousel'
import { GetStaticPaths, GetStaticProps } from 'next'

interface Props {
  product: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'produto-1' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  // console.log(params);
  // const product = new Product(
  //   'Produto 1',
  //   1.50,
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt, leo suscipit bibendum tincidunt, mi tortor cursus ligula, a bibendum nunc augue in massa. Duis a justo diam. Donec pharetra facilisis tincidunt. Nunc sit amet sagittis justo. Phasellus tristique elit nisi, in placerat ipsum cursus nec. Curabitur at enim eget neque condimentum varius sed ut ante. Nulla ac felis erat. Aliquam eu ipsum dui. In at ex ligula. Nulla facilisi. Maecenas eget mi nunc.\n\n Integer pretium massa est, nec sollicitudin metus mattis sit amet. Pellentesque volutpat lectus ut tempor placerat. Morbi et pellentesque dui, id lacinia elit. Nulla sed tortor leo. Integer aliquam libero orci, eu imperdiet est bibendum vitae. Morbi scelerisque mauris nulla, in accumsan magna viverra quis. Fusce laoreet enim lorem, eu vestibulum mi ultricies a.\n\n Pellentesque pulvinar velit urna, et ornare lorem varius a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ut vehicula orci, eget lacinia nisl. Morbi pellentesque, tellus eget vehicula volutpat, dui urna tempor elit, convallis placerat justo justo ut nulla. Maecenas sollicitudin erat lacus, ac fringilla neque laoreet in. Mauris congue felis lectus. Suspendisse a lorem ac nibh cursus iaculis.\n\n Morbi at facilisis enim. Etiam elementum vulputate egestas. Integer scelerisque quis purus et fringilla. Quisque mollis velit a quam pharetra tempus. Ut eu placerat quam, ut pellentesque quam. Donec laoreet turpis sed elit sagittis, hendrerit hendrerit neque auctor. Praesent egestas felis massa, vel ullamcorper orci vulputate quis. Nunc condimentum, urna sed fermentum viverra, lectus risus iaculis felis, quis malesuada nibh nisl ut turpis. Etiam pretium, tortor vel euismod bibendum, est ipsum sollicitudin dolor, non efficitur leo lacus at arcu. Proin rutrum porta tortor quis vehicula. Nunc ac tortor at ex vehicula ullamcorper a et enim.\n\n Integer convallis aliquam dui accumsan ornare. Aenean fringilla finibus euismod. Integer in aliquet metus, sed eleifend massa. Pellentesque tincidunt urna dui. In metus lectus, mattis a laoreet non, bibendum blandit enim. Vivamus suscipit a ipsum eu blandit. Aenean est est, tempus vel semper vitae, pellentesque id magna. Ut id commodo nisi, sit amet aliquet libero. Aenean eleifend ultrices ipsum. Donec aliquam lobortis lobortis. Praesent mattis vel sapien nec tristique. Suspendisse a erat interdum nibh elementum sodales eget nec nibh. Etiam cursus tortor ex, non imperdiet dolor maximus rutrum.',
  //   'produto-1',
  //   [
  //       'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
  //       'https://images.pexels.com/photos/4032973/pexels-photo-4032973.jpeg'
  //   ]
  // );

  return {
    props: {
      // product,
    }
  }
}

export default function Product1 (props: Props): JSX.Element {
  const product = new Product(
    'Produto 1',
    1.50,
    'Teste',
    'produto-1',
    [
      'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
      'https://images.pexels.com/photos/4032973/pexels-photo-4032973.jpeg'
    ]
  )
  // meta data
  const meta = {
    title: product.name,
    description: product.description
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='container d-flex flex-column'>
          <div className='d-flex flex-column flex-md-row'>
            <div style={ { maxWidth: '400px' } }>
              <Carousel id='galery-carousel' imgs={product.images} className='rounded'/>
            </div>
            <div className='card w-100'>
              <div className='card-header'>
                <h1 className='card-title'>{product.name}</h1>
              </div>
              <div className='card-body d-flex flex-column justify-content-evenly'>
                <div className='m-2'>
                  <span>R$ {product.price}</span>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='me-2'>
                    <label htmlFor='quantity'>Quantidade: </label>
                  </div>
                  <div className='input-group'>
                    <button className='input-group-text'>
                      <span>-</span>
                    </button>
                    <input type='number' name='quantity' placeholder='1' min='1' max='100' id='quantity' className='form-control' />
                    <button className='input-group-text'>
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
          <div className='card-body'>
                <h3 className='card-title'>Descrição</h3>
                <p className='card-text'>{product.description}</p>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}
