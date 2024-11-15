console.log("Pokemon Journey Begins...");

const encounterButton = document.getElementById("pokemonEncounterButton");
const pokemonRenderArea = document.getElementById("encounteredPokemonArea");
const pokemonContainerDiv = document.getElementById("pokemonContainer");
const encounterGroupButton = document.getElementById("pokemonGroupEncounterButton");

function renderPokemonData(pokemonData){
    if (!pokemonData.name) {
        return;
    }
    // This Div has a class now
    pokemonContainerDiv.classList += "pokemonCardEntry";

    // attach an image to the container
    let pokemonHeading = document.createElement("h1");
    pokemonHeading.innerText = pokemonData.name;
    pokemonContainerDiv.appendChild(pokemonHeading);

    let pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonData.image;
    // must append it to the div tag
    pokemonContainerDiv.appendChild(pokemonImage);

    let pokemonTypesHeading = document.createElement("h3");
    pokemonTypesHeading.innerText = "Types";
    pokemonContainerDiv.appendChild(pokemonTypesHeading);

    let pokemonTypeList = document.createElement("ul");
    // Loop through the array of pokemonData
    pokemonData.types.forEach((typeObject) => {
        // Create li element for each type
        let pokemonTypeListItem = document.createElement("li");
        // Add name to li
        pokemonTypeListItem.innerText = typeObject.type.name;
        // Append it to the ul
        pokemonTypeList.appendChild(pokemonTypeListItem);
  });
   pokemonContainerDiv.appendChild(pokemonTypeList);
// play sound on button click
   let pokemonAudioButton = document.createElement("button");
   pokemonAudioButton.innerText = "Play Sound";
   pokemonAudioButton.addEventListener("click", () => {
     let pokemonAudioObject = new Audio(pokemonData.sound);
     pokemonAudioObject.play();

    })
    pokemonContainerDiv.appendChild(pokemonAudioButton);

    pokemonRenderArea.appendChild(pokemonContainerDiv);
}

// Get random pokemon ID from between 1 and 1025 (max number of pokemon characters)
function getRandomPokemonId(){
    return Math.ceil(Math.random() * 1025);

}

async function getPokemon() {
    console.log("Looking for a wild Pokemon");

// you await for the fetch function to peform to get the data.
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId());

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
    //let apiData

    console.log(pokemonResult);

    renderPokemonData(pokemonResult);
});
    encounterGroupButton.addEventListener("click", async () => {
        pokemonContainerDiv.innerText = "";


        //From what we learnt so far
        // let pokemonResult1 = await getPokemon();
        // renderPokemonData(pokemonResult1);
        // let pokemonResult2 = await getPokemon();
        // renderPokemonData(pokemonResult2);
        // let pokemonResult3 = await getPokemon();
        // renderPokemonData(pokemonResult3);
        // let pokemonResult4 = await getPokemon();
        // renderPokemonData(pokemonResult4);
        // let pokemonResult5 = await getPokemon();
        // renderPokemonData(pokemonResult5);
        // let pokemonResult6 = await getPokemon();
        // renderPokemonData(pokemonResult6);

        let multiplePokemonResults = await Promise.all([
            getPokemon(),
            getPokemon(),
            getPokemon(),
            getPokemon(),
            getPokemon(),
            getPokemon()
        ]);
        // Check if the output is as expected
            console.log(multiplePokemonResults);

            multiplePokemonResults.forEach(renderPokemonData);
     
            // Lengthier version of the above code
            // multiplePokemonResults.forEach((pokemonResult) => {
            // renderPokemonData(pokemonResult);
            // })
       
    });