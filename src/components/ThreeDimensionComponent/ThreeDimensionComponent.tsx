import { Html, useGLTF, } from '@react-three/drei'
import React, { Fragment, Suspense, useRef, } from 'react'
import { Canvas, extend, useFrame, useThree, } from 'react-three-fiber'
import useMedia from 'react-use/lib/useMedia'
import { OrbitControls, } from 'three/examples/jsm/controls/OrbitControls'
import '../../index.scss'

extend( { OrbitControls, }, )

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Hack so that react recognizes camelCased tags inside JSX element
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
declare global {
 namespace JSX {
  interface IntrinsicElements {
   orbitControls: any
   planeBufferMaterial: any
  }
 }
}

interface ModelProps {
 modelPath: string
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Importing 3D models
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const Model = ( { modelPath, }: ModelProps, ) => {
 const gltf = useGLTF( modelPath, true, )

 return <primitive object={gltf.scene} dispose={null} />
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Lights settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const Lights = () => (
 <>
  <ambientLight intensity={0.3} />
  <directionalLight position={[10, 10, 5, ]} intensity={1} />
  <directionalLight position={[0, 10, 0, ]} intensity={1.5} />
  <spotLight position={[0, 1000, 0, ]} intensity={1} />
 </>
)

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Orbit settings and setup
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const OrbitControlsSettings = () => {
 const orbitRef = useRef<any>()
 const { camera, gl, } = useThree()
 useFrame( () => {
  orbitRef.current.update()
 }, )

 return (
  <orbitControls
   args={[camera, gl.domElement, ]}
   autoRotate
   maxPolarAngle={Math.PI / 3}
   minPolarAngle={Math.PI / 3}
   ref={orbitRef}
  />
 )
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Background settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const PlaneBackground = () => (
 <mesh>
  <planeBufferMaterial />
 </mesh>
)

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE 3D models content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const DuckModel = () => {
 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * NOTE 3D models refs and ration animation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 const duckModelRef = useRef<any>()

 useFrame( () => ( duckModelRef.current.rotation.y += 0.01 ), )

 return (
  <mesh ref={duckModelRef} rotation={[0, -Math.PI / 1.3, 0, ]}>
   <Model modelPath='./models/Duck/glTF/Duck.gltf' />
  </mesh>
 )
}

const CowModel = () => {
 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * NOTE 3D models refs and ration animation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 const cowModelRef = useRef<any>()

 useFrame( () => ( cowModelRef.current.rotation.y += 0.01 ), )

 return (
  <mesh ref={cowModelRef} rotation={[0, -Math.PI / 1.3, 0, ]}>
   <Model modelPath='./models/Cow/scene.gltf' />
  </mesh>
 )
}

const ChickenModel = () => {
 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * NOTE 3D models refs and ration animation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 const chickenModelRef = useRef<any>()

 useFrame( () => ( chickenModelRef.current.rotation.y += 0.01 ), )

 return (
  <mesh ref={chickenModelRef} rotation={[0, -Math.PI / 1.3, 0, ]}>
   <Model modelPath='./models/Chicken/scene.gltf' />
  </mesh>
 )
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Content inside react-three-fiber Html tags
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const HTMLContent = ( {
 CHICKEN_Z_POSITION,
 COW_Z_POSITION,
 DUCK_Z_POSITION,
}: any, ) => {
 return (
  <Html>
   <div className='container-pet'>
    <div className='container-flex-pet'>
     <div className='container-choose-pet container-choose-pet-duck'>
      <Canvas
       camera={{
        position: [0, 0, DUCK_Z_POSITION, ],
       }}
      >
       <OrbitControlsSettings />
       <Lights />
       <Suspense fallback={null}>
        <DuckModel />
       </Suspense>
      </Canvas>
      <button className='container-choose-pet-btn__choose-btn-duck'>
       Duck
      </button>
     </div>
     <div className='container-choose-pet container-choose-pet-cow'>
      <Canvas
       camera={{
        position: [0, 0, COW_Z_POSITION, ],
       }}
      >
       <OrbitControlsSettings />
       <Lights />
       <Suspense fallback={null}>
        <CowModel />
       </Suspense>
      </Canvas>
      <button className='container-choose-pet-btn__choose-btn-cow'>Cow</button>
     </div>
     <div className='container-choose-pet container-choose-pet-chicken'>
      <Canvas
       camera={{
        fov: 100,
        position: [0, 0, CHICKEN_Z_POSITION, ],
       }}
      >
       <OrbitControlsSettings />
       <Lights />
       <Suspense fallback={null}>
        <ChickenModel />
       </Suspense>
      </Canvas>
      <button className=' container-choose-pet-btn__choose-btn-chicken'>
       Chicken
      </button>
     </div>
    </div>
   </div>
  </Html>
 )
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Main component
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ThreeDimensionComponent = () => {
 /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * NOTE Media query for 3D models position
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 const isWide = useMedia( '(min-width: 1100px) ', )
 const CHICKEN_Z_POSITION = isWide ? 3 : 3
 const COW_Z_POSITION = isWide ? -25 : -25
 const DUCK_Z_POSITION = isWide ? 3 : 3

 return (
  <Fragment>
   <Canvas
    camera={{
     position: [0, 0, 0, ],
    }}
   >
    <HTMLContent
     CHICKEN_Z_POSITION={CHICKEN_Z_POSITION}
     COW_Z_POSITION={COW_Z_POSITION}
     DUCK_Z_POSITION={DUCK_Z_POSITION}
    />
   </Canvas>
   <header>
    <button className='btn choose-pet-submit-btn'>Submit</button>
   </header>
  </Fragment>
 )
}

export { ThreeDimensionComponent, }
