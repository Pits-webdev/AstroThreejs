import * as THREE from "three";

export const Cube = () => {
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5, 8, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
};
