exports.data = {
  pagination: {
    data: 'getPokemon',
    size: 1,
    alias: 'pokemon',
  },
  layout: 'PokemonPage.jsx',
  permalink: (data) => {
    const { pagination, getPokemon } = data

    return `${getPokemon[pagination.pageNumber].name}/`
  },
}
