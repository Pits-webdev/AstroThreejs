import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const Bmw = (scene) => {
  const loader = new GLTFLoader();

  loader.load("bmw.glb", (gltf) => {
    // Das geladene Modell wird der Szene hinzugefügt
    scene.add(gltf.scene);

    return loader;
  });
};
