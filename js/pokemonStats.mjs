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
    <section id="pokemonInf">
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
    </section>`;
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
    <section id="pokemonInf">
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
    </section>`;
    }

}

export default class pokemonStats{
    constructor(dataSource, pokemon, parenTag){
        this.dataSource = dataSource;
        this.pokemon = pokemon;
        this.parenTag = parenTag;
    }

    async init(){
        const pokemonData = await this.dataSource.getPokemon(this.pokemon);
        console.log(pokemonData.types.length);
        this.renderTemplate(pokemonData)
        console.log(pokemonData);
    }

    renderTemplate(pokemon){
        this.parenTag.insertAdjacentHTML("afterbegin", renderPokemonStats(pokemon));
    }
}