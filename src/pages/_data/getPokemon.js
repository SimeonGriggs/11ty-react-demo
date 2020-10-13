const fetch = require('node-fetch')

async function getPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon`
  const allPokemon = await fetch(url).then((res) => res.json())
  return allPokemon.results
}

module.exports = getPokemon
