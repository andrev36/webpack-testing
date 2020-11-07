import { Html, useGLTF } from '@react-three/drei';
import React, { Fragment, Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useMedia } from 'react-use';
import '../../index.scss';

// * NOTE Importing 3D models
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

// * NOTE Lights settings
const Lights = () => (
 <>
  <ambientLight intensity={0.3} />
 </>
);

// * NOTE 3D models content
const HTMLContent = () => {
 // * NOTE 3D models refs and ration animation
 const duckModelRef = useRef<any>();
 const cowModelRef = useRef<any>();
 const chickenModelRef = useRef<any>();

 useFrame(() => (duckModelRef.current.rotation.y += 0.01));
 useFrame(() => (cowModelRef.current.rotation.y += 0.01));
 useFrame(() => (chickenModelRef.current.rotation.y += 0.01));

 // * NOTE Media query for 3D models position
 const isWide = useMedia('(min-width: 1100px) ');
 const DUCK_X_POSITION = isWide ? 0 : 0;
 const DUCK_Y_POSITION = isWide ? -1 : -3;
 const DUCK_Z_POSITION = isWide ? 0 : 0;
 const COW_X_POSITION = isWide ? 37 : 0;
 const COW_Y_POSITION = isWide ? 1 : -4;
 const COW_Z_POSITION = isWide ? -45 : -45;
 const CHICKEN_X_POSITION = isWide ? -7 : 0;
 const CHICKEN_Y_POSITION = isWide ? 2.5 : 5.5;
 const CHICKEN_Z_POSITION = isWide ? -5 : -5;

 return (
  <Fragment>
   <group>
    <mesh
     ref={duckModelRef}
     position={[DUCK_X_POSITION, DUCK_Y_POSITION, DUCK_Z_POSITION]}
     rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
    >
     <DuckModel />
     <Html>
      <button className='container-choose-btn__choose-btn-duck'>Duck</button>
     </Html>
    </mesh>
    <mesh
     ref={cowModelRef}
     position={[COW_X_POSITION, COW_Y_POSITION, COW_Z_POSITION]}
     rotation={[Math.PI / 8, -Math.PI / 1.3, 0]}
    >
     <CowModel />
     <Html>
      <button className='container-choose-btn__choose-btn-cow'>Cow</button>
     </Html>
    </mesh>
    <mesh
     ref={chickenModelRef}
     position={[CHICKEN_X_POSITION, CHICKEN_Y_POSITION, CHICKEN_Z_POSITION]}
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

const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 5] }}>
    <Lights />
    <Suspense fallback={null}>
     <HTMLContent />
    </Suspense>
   </Canvas>
   <header>
    <button className='btn choose-submit-btn'>Submit</button>
   </header>
  </>
 );
};

export { ThreeDimensionComponent };
