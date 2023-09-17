'use client'

import Head from 'next/head'
import DefaultScene from '@/components/default-scene'

export default function HomePage() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>AR Soundwalk</title>
      </Head>
      <div>
        <DefaultScene />
      </div>
    </div>
  )
}
