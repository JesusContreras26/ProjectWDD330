import data from "./data.mjs";
import { getParams } from "./utils.mjs";
import pokemonStats from "./pokemonStats.mjs";

const pokemon = getParams("pokemon");
const dataS = new data();
const tag = document.querySelector(".card");

const stats = new pokemonStats(dataS, pokemon, tag);

stats.init();