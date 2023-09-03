const pokemonInput = document.getElementById("pokemonInput")
const showButton = document.getElementById("showButton")
const pokemonDiv = document.getElementById("pokemonDiv")
const nameSpan = document.getElementById("nameSpan")
const heightSpan = document.getElementById("heightSpan")
const weightSpan = document.getElementById("weightSpan")
const baseExperienceSpan = document.getElementById("baseExperienceSpan")

async function showPokemon() {
    const pokemonName = pokemonInput.value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemon = await response.json()
    nameSpan.textContent = pokemon["name"]
    heightSpan.textContent = pokemon["height"]
    weightSpan.textContent = pokemon["weight"]
    baseExperienceSpan.textContent = pokemon["base_experience"]
    pokemonDiv.hidden = false
}

showButton.addEventListener("click", showPokemon)




// minu kood////////////////////////////


// async function baseExperience() {
//     const pokemonName = pokemonInput.value.toLowerCase()
//     const response = await fetch(`https://pokeapi.co/api/v2/ability/31/${pokemonName}}`)
//     const pokemon = await response.json()
//     nameSpan.textContent = pokemon["name"]
//     baseExperience.textContent = pokemon["base_experience"]
//     pokemonDiv.hidden = false


///////////////////////////////////////




// - Base experience
// - Types
// - Front default sprite