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

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Bmw } from "./Models/bmw.js";

import { Cube } from "./Geometries/cube";
import { Plane } from "./Geometries/plane";
import { ShaderGeo } from "./Geometries/shaderGeo.js";

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

//Add Scene
scene.add(plane, cube, shaderGeo);

// Lights
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

/* gui.add(pointLight.position, "x").min(-3).max(3).step(0.01);
gui.add(pointLight.position, "y").min(-3).max(3).step(0.01);
gui.add(pointLight.position, "z").min(-3).max(3).step(0.01);

const col = { color: "#00ff00" };
gui.addColor(col, "color").onChange(() => {
  pointLight.color.set(col.color);
}); */

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

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

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
  // controls.update()

  // render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
