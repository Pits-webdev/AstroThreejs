/* import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//import { Bmw } from "./Models/bmw.js";
//Model
const loader = new GLTFLoader();
loader.load("bmw.glb", (gltf) => {
  // Das geladene Modell wird der Szene hinzugefügt
  scene.add(gltf.scene);
});
 */

import * as THREE from "three";
import { Controls } from "./controls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import GUI from "lil-gui";

import { Bmw } from "./Models/bmw.js";
import { Cube } from "./Geometries/cube";
import { Plane } from "./Geometries/plane";
import { ShaderGeo } from "./Geometries/shaderGeo.js";

import { AmbientLight } from "./Lights/ambienteLight.js";

const app = document.querySelector(".app");
const scene = new THREE.Scene();

/* Model */
const loader = new GLTFLoader();
loader.load("bmw.glb", (gltf) => {
  // Das geladene Modell wird der Szene hinzugefügt
  //scene.add(gltf.scene);
});

/**** Objects ****/
const cube = Cube();
const plane = Plane();
const shaderGeo = ShaderGeo();

/**** Position ****/
cube.position.set(1, 1, 0);
plane.position.set(-1, -1, 0);
shaderGeo.position.set(-3, 2, -5);

/**** Lights ****/
const ambienteLight = AmbientLight();

//Add Scene
scene.add(plane, cube, shaderGeo, ambienteLight);

// Gui
const gui = new GUI({
  closeFolders: true,
});
gui.title("Astro js | Three js");

//Cube Gui
const folderCube = gui.addFolder("Cube");
folderCube.add(cube.position, "x", -2, 2, 0.01).name("pos: x");
folderCube.add(cube.position, "y", -2, 2, 0.01).name("pos: y");
folderCube.add(cube.position, "z", -2, 2, 0.01).name("pos: z");
folderCube.add(cube.rotation, "y", 0, Math.PI * 2, 0.01).name("rotation: y");
folderCube.add(cube.material, "wireframe");
folderCube.add(cube, "visible");
folderCube.addColor(cube.material, "color");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/*   Camera */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

//OrbitControls
const controls = Controls(camera, app);
controls.enableDamping = true;
controls.enableZoom = false;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.5;

// Renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  plane.rotation.y = 0.5 * elapsedTime;
  shaderGeo.material.uniforms.time.value = 1.2 * elapsedTime;

  // Update Orbital Controls
  controls.update();

  // render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
