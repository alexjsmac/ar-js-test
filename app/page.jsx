'use client'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const ARComponentWithNoSSR = dynamic(() => import('../src/components/default-scene.jsx'), { ssr: false })

export default function HomePage() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>AR Soundwalk</title>
      </Head>
      <div>
        <ARComponentWithNoSSR />
      </div>
    </div>
  )
}
