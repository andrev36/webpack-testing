import { useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

const DuckModel = () => {
 // const gltf = useGLTF('./src/assets/models/Duck/glTF/Duck.gltf', true);
 const gltf = useGLTF('./models/Duck/glTF/Duck.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

// * NOTE My StackOverflow question answered:
//   https://stackoverflow.com/questions/64526248/webpack-in-react-cant-load-the-3d-model-with-a-gltf-extension-shows-404-not-fo/64564323#64564323
// * NOTE Public path Webpack: https://webpack.js.org/guides/public-path/
export const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
    <Suspense fallback={null}>
     <mesh position={[0, 250, 0]}>
      <DuckModel />
     </mesh>
    </Suspense>
   </Canvas>
  </>
 );
};
