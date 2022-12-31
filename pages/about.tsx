import React from 'react'
import Head from '../layout/head'

export default function About (): JSX.Element {
  // meta data
  const meta = {
    title: 'Sobre',
    description: ''
  }

  return (
    <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='container'>
      <h1>Sobre</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, odio nec faucibus blandit, mi mi porta nisi, eget venenatis felis tortor a nibh. Nam aliquam vestibulum nisl, eu tristique diam euismod sed. Vestibulum suscipit, mauris eu dapibus ultrices, eros arcu porta arcu, non volutpat justo nisi non lacus. Maecenas molestie, ante at ultrices suscipit, magna lorem condimentum est, maximus elementum augue tellus id est. Suspendisse non placerat leo. Nulla luctus nunc sagittis libero dictum, at convallis sem fermentum. Vivamus libero enim, congue eget dolor ac, hendrerit molestie felis. Etiam quis posuere mauris. Phasellus at volutpat tortor, a viverra diam. Sed condimentum dapibus libero, id finibus lacus. Sed purus urna, facilisis commodo risus quis, egestas malesuada nisl. Aliquam vehicula tempus egestas.</p>

      <p>Morbi vitae tellus diam. Vestibulum porta in purus quis posuere. Mauris porttitor dolor dolor. Maecenas ex quam, gravida a purus nec, porta faucibus dolor. Donec rutrum tortor purus, eu rhoncus nisi mollis id. Suspendisse elit erat, scelerisque sed nulla non, vulputate porttitor arcu. Nam consectetur ornare viverra. Ut mi risus, consequat a mollis sed, convallis a lectus. Phasellus faucibus vitae justo vitae ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

      <p>Suspendisse elementum arcu diam, vitae sagittis turpis dictum eu. Phasellus vitae scelerisque metus, scelerisque luctus felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla vitae metus ipsum. Nunc eget dolor vulputate, luctus dolor ut, iaculis sapien. In hac habitasse platea dictumst. Nulla facilisi. Sed aliquam arcu non mi convallis ultrices. Sed varius urna in nibh semper pharetra. Vivamus tincidunt turpis vel tellus consectetur, sit amet mollis ante congue.</p>

      <p>Fusce a efficitur justo, at cursus eros. In laoreet hendrerit erat, vitae viverra mauris gravida eu. Vestibulum magna nunc, iaculis id hendrerit in, vulputate at sem. Sed nec turpis cursus, ultricies urna sit amet, cursus nunc. Pellentesque rhoncus condimentum quam sit amet porta. Nunc eget felis id turpis sodales pharetra sed rhoncus nibh. Ut congue at magna eget interdum. Maecenas vel lacus et purus tincidunt malesuada. Mauris in metus ante.</p>

      <p>Nunc nulla nulla, maximus ac eros et, pretium luctus sem. Proin tempor vel elit sit amet rutrum. Curabitur libero lectus, egestas sed ornare pulvinar, ultricies non metus. Aenean id lorem egestas, cursus odio in, congue erat. Aenean ut porttitor dolor, non pharetra arcu. Etiam tincidunt lectus sapien, at rutrum erat vestibulum quis. Pellentesque dapibus tempus odio, sed commodo est ultricies vitae. Duis eget blandit mi, et pharetra massa. Pellentesque sem sem, dictum ut velit et, feugiat pulvinar quam. Ut a tellus vitae orci tincidunt lacinia ac ac est.</p>
    </main>
    </>
  )
}
