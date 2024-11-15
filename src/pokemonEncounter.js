console.log("Pokemon Journey Begins...");

const encounterButton = document.getElementById("pokemonEncounterButton");

async function getPokemon() {
    console.log("Looking for a wild Pokemon");
// you await for the fetch function to peform to get the data.
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    // to get the data from the json file
    let apiData = await apiResponse.json();
    
    //Fetch name, type, image, cries
    //let pokemonName = apiData.name;
return {
    name: apiData.name,
    types: apiData.types,
    image: apiData.sprites.other.home.front_default,
    sound: apiData.cries.latest
};

}
// encounterButton.addEventListener("click", (event) => getPokemon(event));

//encounterButton.addEventListener("click", getPokemon)

// click event to fetch the function to return dummy pokemon
//make sure to async and await to return the value of the function.
encounterButton.addEventListener("click", async (event) => {
    console.log("Doing something...");

    let pokemonResult = await getPokemon();
    let apiData

    console.log(pokemonResult);

});