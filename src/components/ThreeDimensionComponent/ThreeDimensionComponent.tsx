import { useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

const DuckModel = () => {
 const gltf = useGLTF('./models/Duck/glTF/Duck.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

export const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 3], fov: 80 }}>
    <ambientLight intensity={0.3} />
    <Suspense fallback={null}>
     <DuckModel />
    </Suspense>
   </Canvas>
  </>
 );
};
