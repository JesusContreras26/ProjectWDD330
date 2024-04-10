import { getParams, getLocalStorage } from "./utils.mjs";
import data from "./data.mjs";
import pokemonsList from "./pokemonsList.mjs";

const dataS = new data();
const type = getParams("type")
const htmlTag = document.querySelector("#pokemons");
const generation = getLocalStorage("generation"); 
const pokemons = new pokemonsList(dataS, type, htmlTag, generation.charAt(0));

pokemons.init();