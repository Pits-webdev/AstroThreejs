import * as THREE from "three";

export const AmbientLight = () => {
  const light = new THREE.AmbientLight("red", 1);
  return light;
};
