import checkoutProcess from "./checkoutProcess.mjs";

const parent = document.querySelector(".checkPoke")
const key = "pokemons-catched"
const check = new checkoutProcess(key, parent);
check.init();
check.getInf();
const button = document.querySelector("#checkSubmit");
button.addEventListener("click", (e) => {
    e.preventDefault();
    if(!(document.querySelector("#fname").value === "" || document.querySelector("#lname").value === "" || document.querySelector("#email").value === "")){
        check.sendEmail();
    }
})
