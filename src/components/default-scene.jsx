'use client'

import { Suspense, useState } from 'react'
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr'
import { Text } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import { RoundedBoxGeometry } from 'three-stdlib'
extend({ RoundedBoxGeometry })

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <roundedBoxGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  )
}

function Button(props) {
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState('blue')

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0)
  }

  return (
    <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
        <Suspense fallback={null}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color='#000' anchorX='center' anchorY='middle'>
            Hello Greg!
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  )
}

function DefaultScene() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace='local'>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}

export default DefaultScene
