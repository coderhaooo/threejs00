import {WebGLRenderer} from "three";
// TODO 调整渲染器的一些设置以提高渲染质量
function createRenderer() {
  const renderer = new WebGLRenderer()
  return renderer;
}

export {createRenderer}
