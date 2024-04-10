import { renderListWithTemplate } from "./utils.mjs";
function pokemonTemplate(pokemon) {
    return `<section class="pokemon">
    <a href="../pokemon_stats/pokemon.html?pokemon=${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
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
            try {
                let pokemonData = await this.dataSource.getPokemon(pokemon.name);
                pokemonInf.push(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }


        for (const pokemon of pokemonInf) {
            for (const type of pokemon.types) {
                if (type.type.name === this.type){
                    pokemonByTypes.push(pokemon);
                    }             

            }

        }

        renderListWithTemplate(pokemonTemplate, this.lisTag, pokemonByTypes);
    }

}
