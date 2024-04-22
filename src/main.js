import '../style.css'
import {World} from "./World/World.js";

const main = () => {
  const container = document.querySelector('#app');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

main()
