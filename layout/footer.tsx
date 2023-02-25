import React from 'react'
import Nav from './nav'

interface Props {}

export default function Footer (props: Props): JSX.Element {
  return (
    <footer className="container py-3 my-4">
      <Nav className='justify-content-center border-bottom pb-3 mb-3'/>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  )
}
