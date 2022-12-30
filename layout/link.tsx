import React from 'react'
import NextLink from 'next/link'

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function Link(props: Props) {
  return (
    <NextLink href={props.href} className={props.className}>
        {props.children}
    </NextLink>
  )
}
