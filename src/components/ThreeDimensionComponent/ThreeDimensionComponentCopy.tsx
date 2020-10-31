// const DuckModel = require('../../assets/images/Duck.gltf');
import { RoundedBox } from 'drei';
import React from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import DuckModel from '../../assets/images/Duck.gltf';
const DuckModel = require('../../assets/images/Duck/glTF/Duck.gltf').default;

const Duck = () => {
 const gltf = useLoader(GLTFLoader, DuckModel);
 return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

// function Box() {
//  return (
//   <mesh>
//    <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
//    <meshStandardMaterial attach='material' transparent opacity={0.5} />
//   </mesh>
//  );
// }

export const ThreeDimensionComponent = () => {
 return (
  <>
   <Canvas camera={{ position: [0, 0, 10] }}>
    <RoundedBox
     args={[1, 1, 1]} // Width, Height and Depth of the box
     radius={0.05} // Border-Radius of the box
     smoothness={4} // Optional, number of subdivisions
     //  {...meshProps} // All THREE.Mesh props are valid
    >
     <meshPhongMaterial attach='material' color='#f3f3f3' wireframe />
    </RoundedBox>
   </Canvas>
   {/* {!clicked && (
    <button onClick={() => set(true)}>Load duck w/ 1s delay</button>
   )} */}
  </>
 );
};

// export const ThreeDimensionComponent = () => {
//  const [clicked, set] = useState(false);
//  useEffect(() => {
//   Duck();
//  });
//  return (
//   <>
//    <Canvas camera={{ position: [0, 0, 10] }}>
//     <ambientLight intensity={0.5} />
//     <spotLight intensity={0.8} position={[300, 300, 400]} />
//     {/* <Suspense fallback={<Box />}>{clicked && <Duck />}</Suspense> */}
//     <Duck />
//    </Canvas>
//    {/* {!clicked && (
//     <button onClick={() => set(true)}>Load duck w/ 1s delay</button>
//    )} */}
//   </>
//  );
// };

// // * NOTE Example from: https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
// export class ThreeDimensionComponent extends React.Component {
//  componentDidMount() {
//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xffffff);
//   const camera = new THREE.PerspectiveCamera(
//    75,
//    window.innerWidth / window.innerHeight,
//    0.1,
//    1000
//   );
//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
//   // * NOTE Loading custom 3D model below
//   const loader = new GLTFLoader();
//   // * NOTE Duck model
//   // loader.load('src/assets/images/Duck.gltf', (gltf) => {
//   loader.load('./Duck.gltf', (gltf) => {
//    const model = gltf.scene;
//    scene.add(gltf.scene);
//   });
//   // document.body.appendChild(renderer.domElement);
//   // // use ref as a mount point of the Three.js scene instead of the document.body
//   // (this as any).mount.appendChild(renderer.domElement);
//   // const geometry = new THREE.BoxGeometry(1, 1, 1);
//   // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   // const cube = new THREE.Mesh(geometry, material);
//   // scene.add(cube);
//   // camera.position.z = 5;
//   // const animate = function () {
//   //  requestAnimationFrame(animate);
//   //  cube.rotation.x += 0.01;
//   //  cube.rotation.y += 0.01;
//   //  renderer.render(scene, camera);
//   // };
//   // animate();
//  }
//  render() {
//   return <div ref={(ref: any) => ((this as any).mount = ref)} />;
//  }
// }
