import './style.css'
import Stats from "three/examples/jsm/libs/stats.module.js";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    Mesh,
    AxesHelper,
    Clock,
    MeshNormalMaterial
} from "three";

const WIDTH = document.getElementById("app").clientWidth;
const HEIGHT = document.getElementById("app").clientHeight;

const scene = new Scene();

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);

const stats = new Stats(); // 性能监视器
const axes = new AxesHelper(10)
scene.add(axes)

//PerspectiveCamera() 中的 4 个参数分别为：
//1、fov(field of view 的缩写)，可选参数，默认值为 50，指垂直方向上的角度，注意该值是度数而不是弧度
//2、aspect，可选参数，默认值为 1，画布的宽高比(宽/高)，例如画布宽300像素，高150像素，那么意味着宽高比为 2
//3、near，可选参数，默认值为 0.1，近平面，限制摄像机可绘制最近的距离，若小于该距离则不会绘制(相当于被裁切掉)
//4、far，可选参数，默认值为 2000，远平面，限制摄像机可绘制最远的距离，若超出该距离则不会绘制(相当于被裁切掉)
//以上 4 个参数在一起，构成了一个 “视椎”
const camera = new PerspectiveCamera(75, WIDTH/HEIGHT, 0.1, 1000)

//之前初始化透视镜头时，设置的近平面为 0.1，远平面为 1000
//因此 camera.position.z 的值一定要在 0.1 - 1000 的范围内，超出这个范围则画面不会被渲染
camera.position.set(0,0,5);
camera.lookAt(scene.position);

const render = new WebGLRenderer();
render.setClearColor(0xffffff);
render.setSize(WIDTH, HEIGHT);
document.getElementById("app").appendChild(render.domElement);
document.body.appendChild(stats.dom);

const controller = new OrbitControls(camera, render.domElement) // 轨道控制器

const clock = new Clock();
function animate() {
    const time = clock.getElapsedTime(); // time的值基本一定，解决高刷屏上动画速度过快的问题
    cube.position.x = 2 * Math.sin(time);
    cube.position.y = 2 * Math.cos(time);
    // cube.rotation.z = time;
    stats.update();
    controller.update();
    render.render(scene, camera);
    requestAnimationFrame(animate)
}

animate();





