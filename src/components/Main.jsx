import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'

const Main = () => {
  return (
    <Canvas>
    <pointLight position={[10, 10, 10]} />
    <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
      <PerspectiveCamera makeDefault  />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </mesh>
  </Canvas>
  )
}

export default Main