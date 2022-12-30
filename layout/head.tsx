import React from 'react';
import NextHead from 'next/head'

type Props = {
    children: React.ReactNode;
}

export default function Head(props: Props) {
  return (
    <NextHead>
        {props.children}
    </NextHead>
  )
}
