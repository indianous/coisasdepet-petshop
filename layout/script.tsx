import React from 'react';
import NextScript from 'next/script';

type Props = {
    src: string;
    crossorigin: string;
    integrity: string;
}

export default function Script(props: Props) {
  return (
    <NextScript src={props.src}/>
  )
}
