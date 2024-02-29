import './style.css'
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
/* scene 场景 */
const scene = new Scene();

/* Object 物体 */
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial();
const mesh = new Mesh(geometry, material);
scene.add(mesh);

/* camera 相机 */
const camera = new PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 100)
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

/* render 渲染器 */
const render = new WebGLRenderer();
render.setSize(WIDTH, HEIGHT);
render.render(scene, camera);

// 将渲染器绑定到指定的DOM元素中
document.getElementById("app").appendChild(render.domElement);



