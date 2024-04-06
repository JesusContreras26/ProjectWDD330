const baseURL = 'https://pokeapi.co/api/v2/';
async function convertToJSON(res) {
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw new Error("You make a mistake")       
    }
}

export default class data{
    async getData(generation){
        const response = await fetch(baseURL + "generation/" + generation);
        const data = await convertToJSON(response);
        return data;
    }

    async getTypes(){
        
    }
}