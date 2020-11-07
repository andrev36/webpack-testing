import { Html, useGLTF } from '@react-three/drei';
import React, { Fragment, Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import '../../index.scss';

const DuckModel = () => {
 const gltf = useGLTF('./models/Duck/glTF/Duck.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

const CowModel = () => {
 const gltf = useGLTF('./models/Cow/scene.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

const ChickenModel = () => {
 const gltf = useGLTF('./models/Chicken/scene.gltf', true);
 return <primitive object={gltf.scene} dispose={null} />;
};

export const Lights = () => (
 <>
  <ambientLight intensity={0.3} />
 </>
);

export const HTMLContent = () => {
 const duckModelRef = useRef<any>();
 const cowModelRef = useRef<any>();
 const chickenModelRef = useRef<any>();
 useFrame(() => (duckModelRef.current.rotation.y += 0.01));
 useFrame(() => (cowModelRef.current.rotation.y += 0.01));
 useFrame(() => (chickenModelRef.current.rotation.y += 0.01));
 return (
  <Fragment>
   <group>
    <mesh
     ref={duckModelRef}
     position={[0, -1, 0]}
     rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
    >
     <DuckModel />
     <Html>
      <button className='container-choose-btn__choose-btn-duck'>Duck</button>
     </Html>
    </mesh>
    <mesh
     ref={cowModelRef}
     position={[37, 1, -45]}
     rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
    >
     <CowModel />
     <Html>
      <button className='container-choose-btn__choose-btn-cow'>Cow</button>
     </Html>
    </mesh>
    <mesh
     ref={chickenModelRef}
     position={[-7, 2.5, -5]}
     rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
    >
     <ChickenModel />
     <Html>
      <button className='container-choose-btn__choose-btn-chicken'>
       Chicken
      </button>
     </Html>
    </mesh>
   </group>
  </Fragment>
 );
};

export const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 5] }}>
    <Lights />
    <Suspense fallback={null}>
     <HTMLContent />
    </Suspense>
   </Canvas>
   <button className='btn choose-submit-btn'>Submit</button>
  </>
 );
};
