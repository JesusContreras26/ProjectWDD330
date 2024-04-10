import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderPokemonStats(pokemon){
    if(pokemon.types.length === 2){
        return `<section id="pokemon">
        <div class="pokemon-name">
            <h2>Name: ${pokemon.name}</h2>
            <p>Id: ${pokemon.id}</p>
        </div>
        <div class="pokemonImg">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokeType">
            <p class="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
            <p class="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</p>
        </div>
    </section>
    <h2>Stats</h2>
    <section class="pokemonInf">
        <div class="stats1">
            <p>Hp: ${pokemon.stats[0].base_stat}</p>
            <p>Attack: ${pokemon.stats[1].base_stat}</p>
            <p>Defense: ${pokemon.stats[2].base_stat}</p>
        </div>
        <div class="stats2">
            <p>Special-attack: ${pokemon.stats[3].base_stat}</p>
            <p>Special-defence: ${pokemon.stats[4].base_stat}</p>
            <p>Speed: ${pokemon.stats[5].base_stat}</p>
        </div>
    </section>
    <button id="addToBag">Catch it!</button>`;
    } else{
        return `<section id="pokemon">
        <div class="pokemon-name">
            <h2>Name: ${pokemon.name}</h2>
            <p>Id: ${pokemon.id}</p>
        </div>
        <div class="pokemonImg">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokeType">
            <p class="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
        </div>
    </section>
    <h2>Stats</h2>
    <section class="pokemonInf">
        <div class="stats1">
            <p>Hp: ${pokemon.stats[0].base_stat}</p>
            <p>Attack: ${pokemon.stats[1].base_stat}</p>
            <p>Defense: ${pokemon.stats[2].base_stat}</p>
        </div>
        <div class="stats2">
            <p>Special-attack: ${pokemon.stats[3].base_stat}</p>
            <p>Special-defence: ${pokemon.stats[4].base_stat}</p>
            <p>Speed: ${pokemon.stats[5].base_stat}</p>
        </div>
    </section>
    <button id="addToBag">Catch it!</button>`
    }

}

export default class pokemonStats{
    constructor(dataSource, pokemon, parenTag){
        this.dataSource = dataSource;
        this.pokemon = pokemon;
        this.parenTag = parenTag;
    }

    async init(){
        this.pokemonData = await this.dataSource.getPokemon(this.pokemon);
        this.renderTemplate(this.pokemonData)
        document.getElementById("addToBag").addEventListener("click", this.addToBag.bind(this))
    }

    renderTemplate(pokemon){
        this.parenTag.insertAdjacentHTML("afterbegin", renderPokemonStats(pokemon));
    }

    addToBag(){
        let content = getLocalStorage("pokemons-catched")
        let control;
        if (!content) {
            content= [];
        }
        for (const pokemon of content) {
            if (pokemon.name === this.pokemonData.name) {
                control = 1;
            }
        }

        if (control === 1 ) {
            console.log("You already catched this pokemon")
        }else if (content.length === 6){
            console.log("Your bag is full!!")
        }else{
            content.push(this.pokemonData);
            setLocalStorage("pokemons-catched", content);
        }
        
    }
}