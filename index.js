#!/usr/bin/env node

const axios = require("axios");

// async function that returns a random Pokemon name from PokeAPI
async function fetchRandomPokemon() {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonList = res.data.results;
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const pokemonName = pokemonList[randomIndex].name
        return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    } catch (error) {
        console.log(`oops, something went wrong! ${error.message}`);
        ProcessingInstruction.exit(1);
    }
}

async function main() {
    const randomPokemon = await fetchRandomPokemon();
    console.log(randomPokemon);
}

main();