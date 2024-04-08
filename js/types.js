import data from "./data.mjs";
import { getParams , setLocalStorage} from "./utils.mjs";
import typesList from "./typesList.mjs";

const dataS = new data();
const generation = getParams("generation");
const htmlItem = document.querySelector("#types");
const pokemonTypes = new typesList(dataS, generation, htmlItem);
setLocalStorage('generation', generation);
pokemonTypes.init();
