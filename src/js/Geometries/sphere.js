import * as THREE from "three";

export const Sphere = () => {
  const geometry = new THREE.SphereGeometry(4, 32, 32);

  const material = new THREE.MeshStandardMaterial({
    color: "rgba(229, 29, 173, 1)",
    //metalness: 0.7,
    //roughness: 0.2,
  });

  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
};
