import { renderListWithTemplate } from "./utils.mjs";
function pokemonTemplate(pokemon) {
    return `<section class="pokemon">
    <a href="">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="testing">
    </a>
</section>`
}

export default class pokemonsList{
    constructor(dataSource, type, lisTag, generation){
        this.dataSource = dataSource;
        this.type = type;
        this.lisTag = lisTag;
        this.generation = generation;
    }

    async init(){
        const generationData = await this.dataSource.getData(this.generation);
        let pokemonGen = [];
        pokemonGen = generationData.pokemon_species;
        let pokemonInf = [];
        let pokemonByTypes = [];
        for (const pokemon of pokemonGen) {
            if(!(pokemon.name === "deoxys") && !(pokemon.name === "wormadam") && !(pokemon.name === "giratina") && !(pokemon.name === "shaymin")
            && !(pokemon.name === "basculin") && !(pokemon.name === "darmanitan") && !(pokemon.name === "tornadus") && !(pokemon.name === "thundurus")
            && !(pokemon.name === "landorus") && !(pokemon.name === "keldeo") && !(pokemon.name === "meloetta") && !(pokemon.name === "meowstic") 
            && !(pokemon.name === "aegislash") && !(pokemon.name === "pumpkaboo") && !(pokemon.name === "zygarde") && !(pokemon.name === "gourgeist")
            && !(pokemon.name === "oricorio") && !(pokemon.name === "wishiwashi") && !(pokemon.name === "lycanroc") && !(pokemon.name === "minior")
            && !(pokemon.name === "mimikyu") && !(pokemon.name === "eiscue") && !(pokemon.name === "indeedee") && !(pokemon.name === "morpeko") 
            && !(pokemon.name === "enamorus") && !(pokemon.name === "toxtricity") && !(pokemon.name === "urshifu") && !(pokemon.name === "basculegion")){
                let pokemonData = await this.dataSource.getPokemon(pokemon.name);
                console.log();
                pokemonInf.push(pokemonData);
            }
        }

        for (const pokemon of pokemonInf) {
            for (const type of pokemon.types) {
                if (type.type.name === this.type){
                    pokemonByTypes.push(pokemon);
                    }             

            }

        }
        console.log(pokemonByTypes);

        renderListWithTemplate(pokemonTemplate, this.lisTag, pokemonByTypes);
    }

}
