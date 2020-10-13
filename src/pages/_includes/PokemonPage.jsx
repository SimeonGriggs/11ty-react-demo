import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import ParentLayout from '../../layouts/ParentLayout'
import Nav from '../../components/Nav'
import Heading from '../../components/Heading'

// `props` is the data provided by Eleventy.
export default function PokemonPage({ page, pokemon, getPokemon }) {
  return (
    <ParentLayout>
      <Helmet>
        <title>{pokemon.name}</title>
        <link rel="canonical" href={page.url} />
      </Helmet>
      <Heading>{pokemon.name}</Heading>
      {JSON.stringify(pokemon)}
      <div className="h-6" />
      <Nav nav={getPokemon} currentUrl={page.url} />
    </ParentLayout>
  )
}

PokemonPage.propTypes = {
  page: PropTypes.object,
  pokemon: PropTypes.object,
  getPokemon: PropTypes.array,
}

PokemonPage.defaultProps = {
  page: {},
  pokemon: {},
  getPokemon: [],
}
