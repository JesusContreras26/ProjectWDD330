import checkoutProcess from "./checkoutProcess.mjs";

const parent = document.querySelector(".checkPoke")
const key = "pokemons-catched"
const check = new checkoutProcess(key, parent);
check.init();