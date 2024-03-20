import * as THREE from "three";

export const AmbientLight = () => {
  const light = new THREE.AmbientLight("#222222", 0.5);
  return light;
};
