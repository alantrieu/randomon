#!/usr/bin/env node

const axios = require("axios");

async function fetchRandomPokemon() {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonList = res.data.results;
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        return pokemonList[randomIndex].name;
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