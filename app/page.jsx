import dynamic from 'next/dynamic'

const ARComponentWithNoSSR = dynamic(() => import('@/components/default-scene.jsx'), { ssr: false })

export default function HomePage() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div>
        <ARComponentWithNoSSR />
      </div>
    </div>
  )
}
