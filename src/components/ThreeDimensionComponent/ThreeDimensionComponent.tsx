import { useGLTF } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const DuckModel = () => {
 const gltf = useGLTF('./models/Duck/glTF/Duck.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

export const Lights = () => (
 <>
  <ambientLight intensity={0.3} />
 </>
);

export const HTMLContent = () => {
 const ref = useRef<any>();
 useFrame(() => (ref.current.rotation.y += 0.01));
 return (
  <>
   <mesh
    ref={ref}
    position={[0, 0, 0]}
    rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
   >
    <DuckModel />
   </mesh>
  </>
 );
};

export const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 3], fov: 80 }}>
    <Lights />
    <Suspense fallback={null}>
     <HTMLContent />
    </Suspense>
   </Canvas>
  </>
 );
};
