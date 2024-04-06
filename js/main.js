const URLPoke = "https://pokeapi.co/api/v2/";

async function data (URL) {
    const res = await fetch(URL + "generation/1/");
    if (res.ok) {
        const data = res.json();
        return data;
    } else {
        throw new Error("there is an error")
    }
}

function pokemonTypes(data){
    let typesP = [];
    typesP = data.types;
    return typesP
}

async function getPokemons(data, typesof, URL){
    let pokemonGen = [];
    pokemonGen = data.pokemon_species;
    let pokemonInf = [];
    for (const pokemon of pokemonGen) {
        let pokemonData = await getPokemonData(pokemon.name, URL)
        pokemonInf.push(pokemonData)
    }
    console.log(pokemonInf);
    console.log(types);
    let pokemonByTypes = [];
    for (const type of typesof) {
        pokemonByTypes.push({
            key: type.name,
            value: []
        });
    }
        for (const pokemon of pokemonInf) {
            for (const type of pokemon.types) {
                for (let index = 0; index < pokemonByTypes.length; index++) {
                    if (type.type.name === pokemonByTypes[index].key){
                        pokemonByTypes[index].value.push(pokemon);
                        }
                }

            }

        }
    
    console.log(pokemonByTypes);
}

async function getPokemonData(pokemon, URL){
    const res = await fetch(URL + "pokemon/" + pokemon)
    const data = await res.json();
    return data;
}

const dataPoke = await data(URLPoke);
const types = pokemonTypes(dataPoke);
const pokemons = await getPokemons(dataPoke, types, URLPoke);
