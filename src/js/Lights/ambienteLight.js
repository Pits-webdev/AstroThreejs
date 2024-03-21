import * as THREE from "three";

export const AmbientLight = () => {
  const light = new THREE.AmbientLight("white", 1);
  return light;
};
