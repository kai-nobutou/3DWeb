// ThreeCanvas.js
import React, { useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ThreeCanvas() {
  const { scene } = useGLTF('/3D_Ouject.glb');
  const spotLightRef = useRef();
  const objectRef = useRef();

  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y += 0.001;
    }
    if (spotLightRef.current) {
      spotLightRef.current.target.position.set(0, 0, 0);
      spotLightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <spotLight
        ref={spotLightRef}
        position={[0, 10, 0]}
        angle={0.2}
        distance={100}
        penumbra={0.1}
        intensity={300}
        castShadow
      />
      <ambientLight intensity={0.2} />
      
      <primitive object={scene} ref={objectRef} scale={[0.5, 0.5, 0.5]} />

      <OrbitControls enableZoom={false} enableRotate={true} />
    </>
  );
}