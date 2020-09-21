import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


// * NOTE Example from: https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
export class ThreeDimensionComponent extends React.Component {
 componentDidMount() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  var camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
  );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // * NOTE Loading custom 3D model below
  // const loader = new GLTFLoader();
  // * NOTE Pikachu model from: https://github.com/SamsungInternet/ar-demos/tree/master/src/obj/pikachu
  // loader.load('./pikachu.gltf', (gltf) => {
  //  const model   = gltf.scene
  //  scene.add(gltf.scene);
  // });
  // document.body.appendChild( renderer.domElement );
  // use ref as a mount point of the Three.js scene instead of the document.body
  (this as any).mount.appendChild(renderer.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  var animate = function () {
   requestAnimationFrame(animate);
   cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;
   renderer.render(scene, camera);
  };
  animate();
 }
 render() {
  return <div ref={(ref: any) => ((this as any).mount = ref)} />;
 }
}
