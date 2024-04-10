import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

function renderBag(pokemon){
    if(pokemon.types.length === 2){
        return `<section class="pokemons">
        <h2 class="pokemonName">${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="pokeTypeB">
            <p class="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
            <p class="${pokemon.types[0].type.name}">${pokemon.types[1].type.name}</p>
        </div>
        <div class="statsB">
            <p>Attack: ${pokemon.stats[0].base_stat}</p>
            <p>Defense: ${pokemon.stats[1].base_stat}</p>
        </div>
    </section>`;
    }else{
        return `<section class="pokemons">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="pokeTypeB">
            <p class="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
        </div>
        <div class="statsB">
            <p>Attack: ${pokemon.stats[0].base_stat}</p>
            <p>Defense: ${pokemon.stats[1].base_stat}</p>
        </div>
    </section>`;
    }

}

getLocalStorage
export default class pokeBag{
    constructor(key, parentTag){
        this.key = key;
        this.parentTag = parentTag;
    }

    init(){
        this.pokemonsInBag = getLocalStorage(this.key);
        if (!this.pokemonsInBag) {
            this.pokemonsInBag = [];
        }
        const parent = document.querySelector(this.parentTag);

        renderListWithTemplate(renderBag, parent, this.pokemonsInBag)

    }


}