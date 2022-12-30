import React from 'react';
import Link from './link';

type Props = {
    className?: string;
}

export default function Nav(props: Props) {
  return (
    <nav className={`nav ${props.className || ''}`}>
        <Link href="/" className="nav-item nav-link px-2 link-dark">Início</Link>
        <Link href="/about" className="nav-item nav-link px-2 link-dark">Sobre</Link>
    </nav>
  )
}
