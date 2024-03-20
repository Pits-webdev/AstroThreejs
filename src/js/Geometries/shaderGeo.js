import * as THREE from "three";

import vShader from "../../shaders/vertex.glsl.js";
import fShader from "../../shaders/fragment.glsl.js";

const texture = new THREE.TextureLoader().load("/sky.png");

export const ShaderGeo = () => {
  const uniforms = {
    time: { type: "f", value: 0 },
    sky: { type: "f", value: texture },
  };

  const geometry = new THREE.SphereGeometry(2, 32, 16);

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vShader,
    fragmentShader: fShader,
    //color: "crimson",
    //wireframe: true,
    side: THREE.DoubleSide,
  });

  const shaderGeo = new THREE.Mesh(geometry, material);
  return shaderGeo;
};
