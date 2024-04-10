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
        let parenTag = document.querySelector("main");
        if (!content) {
            content= [];
        }
        for (const pokemon of content) {
            if (pokemon.name === this.pokemonData.name) {
                control = 1;
            }
        }

        if (control === 1 ) {
            if( parenTag.childNodes.length <= 3){
                let message = document.createElement("div");
                message.innerHTML = `<p>You already have catched that pokemon!! <span>X</span></p>`;
                message.id = "error-catch";
                parenTag.insertBefore(message, parenTag.firstChild);
                message.addEventListener("click", function(e){
                    if(e.target.tagName == "SPAN"){
                      parenTag.removeChild(this);
                    }
                  })
            }
        }else if (content.length === 6){
            if (parenTag.childNodes.length <= 3) {
                let message = document.createElement("div");
                message.innerHTML = `Your bag of pokemons is full Master!!<span>X</span>`;
                message.id = "error-catch";
                parenTag.insertBefore(message, parenTag.firstChild);
                message.addEventListener("click", function(e){
                    if(e.target.tagName == "SPAN"){
                      parenTag.removeChild(this);
                    }
                })
            }
        }else{
            if (parenTag.childNodes.length <= 3) {
                content.push(this.pokemonData);
                setLocalStorage("pokemons-catched", content);
                let message = document.createElement("div");
                message.innerHTML = `Great!! You got a new Pokemon in your bag Master!<span>X</span>`;
                message.id = "error-catch";
                parenTag.insertBefore(message, parenTag.firstChild);
                message.addEventListener("click", function(e){
                    if(e.target.tagName == "SPAN"){
                      parenTag.removeChild(this);
                    }
                })
            }
        }
        
    }
}