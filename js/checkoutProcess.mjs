import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

function renderBag(pokemon){
    if(pokemon.types.length === 2){
        return `<section class="pokemonsCheck">
        <h2>${pokemon.name}</h2>
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
        return `<section class="pokemonsCheck">
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

export default class checkoutProcess{
    constructor(key, parent){
        this.key = key;
        this.parent = parent
    }

    init(){
        const pokeBag = getLocalStorage(this.key);
        renderListWithTemplate(renderBag, this.parent, pokeBag);
    }
}