import { renderListWithTemplate } from "./utils.mjs";
import data from "./data.mjs";
function typeListTemplate(type){
    return `<section class="type">
    <a href="">
        <h2>${type.name}</h2>
        <img src="../images/${type.name}.png" alt="teting">
    </a>
</section>`
}


export default class typesList{
    constructor(dataSource, generation, listTag){
        this.generation = generation;
        this.dataSource = dataSource;
        this.listTag = listTag;
    }

    async init(){
        const pokemonData = await this.dataSource.getData(this.generation);
        console.log(pokemonData.types);
        renderListWithTemplate(typeListTemplate, this.listTag, pokemonData.types);
    }
}