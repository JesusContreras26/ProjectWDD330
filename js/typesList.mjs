import { renderListWithTemplate } from "./utils.mjs";
function typeListTemplate(name){
    return `<section class="type">
    <a href="../pokemons/pokemons.html?type=${name}">
        <h2>${name}</h2>
        <img src="../images/${name}.png" alt="teting">
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
        let types = [] 
        
        for (let index = 1; index <= parseInt(this.generation.charAt(0)); index++) {
            const firstGen = await this.dataSource.getData(index + "/");
            
            firstGen.types.map((type)=>{
                types.push(type.name);
            })
  
        }

        renderListWithTemplate(typeListTemplate, this.listTag, types);
    }
}