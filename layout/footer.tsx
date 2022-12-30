import React from 'react';
import Nav from './nav';

type Props = {}

export default function Footer(props: Props) {
  return (
    <footer className="container py-3 my-4">
      <Nav className='justify-content-center border-bottom pb-3 mb-3'/>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  )
}
