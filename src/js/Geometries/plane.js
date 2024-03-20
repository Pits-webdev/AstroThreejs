import * as THREE from "three";

export const Plane = () => {
  const geometry = new THREE.PlaneGeometry(0.4, 0.4);
  const material = new THREE.MeshStandardMaterial({
    color: "rgba(229, 29, 173, 1)",
    side: THREE.DoubleSide,
    //metalness: 0.7,
    //roughness: 0.2,
  });

  const plane = new THREE.Mesh(geometry, material);

  return plane;
};
