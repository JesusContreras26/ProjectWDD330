import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

function formDataToJson(element){
    const formData = new FormData(element), convertedJson = {};
    formData.forEach(function (value, key){
        convertedJson[key] = value;
    });
    return convertedJson;
}

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
        this.pokeBag = getLocalStorage(this.key);
        renderListWithTemplate(renderBag, this.parent, this.pokeBag);
    }

    async getInf(){
        const formElement = document.forms["user"];
        const json = formDataToJson(formElement);
        return json;
    }

    async sendEmail(){
        const json = await this.getInf();
        console.log(json);
        let messageSend = "";
        for (const pokemon of this.pokeBag) {
            messageSend += "Pokemon: " + pokemon.name + "\nAttack: " + pokemon.stats[0].base_stat+ "\nDefense: " + pokemon.stats[1].base_stat + "\n\n";
        }

        const params = {
            from_name: "Jesus Contreras",
            to_name: json.fname + " " + json.lname,
            to_email: json.email,
            message: messageSend
        } 
        emailjs.send("service_tss6ge7", "template_e7x470d", params).then(function (res) {
             location.assign("../poke_checkout/success.html");
             setLocalStorage("pokemons-catched", []);
        })
    }
}