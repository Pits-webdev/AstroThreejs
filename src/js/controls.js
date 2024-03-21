import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const Controls = (camera, app) => {
  const controls = new OrbitControls(camera, app);
  return controls;
};
