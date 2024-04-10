import pokeBag from "./pokeBag.mjs";

const bag = new pokeBag("pokemons-catched", ".pokemon-bag")

const button = document.querySelector(".checkout")
let parenTag = document.querySelector("main");
console.log(parenTag.childNodes.length);

bag.init();
button.addEventListener("click", (e) => {
    e.preventDefault;
    if(document.querySelector(".pokemon-bag").childNodes.length <= 5){
        if (parenTag.childNodes.length <= 5) {
            let message = document.createElement("div");
            message.innerHTML = `<p>You must have six pokemons in your bag Master!! <span>X</span></p>`;
            message.id = "error-catch";
            parenTag.insertBefore(message, parenTag.firstChild);
            message.addEventListener("click", function(e){
                if(e.target.tagName == "SPAN"){
                  parenTag.removeChild(this);
                }
              })
        }
    }else{
        location.assign("../poke_checkout/checkout.html");
    }
})
