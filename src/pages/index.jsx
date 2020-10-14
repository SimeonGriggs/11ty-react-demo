import React from 'react'

import ParentLayout from '../layouts/ParentLayout'
import Nav from '../components/Nav'
import Heading from '../components/Heading'

// `props` is the data provided by Eleventy.
export default function IndexPage(props) {
  const { page, getPokemon } = props

  return (
    <ParentLayout>
      <Heading>Welcome!</Heading>

      <div className="mb-6 py-12 prose prose-lg">
        <p>
          This is an <a href="https://www.11ty.dev/">11ty</a> demo,{` `}
          <a href="https://github.com/SimeonGriggs/11ty-react-demo">
            see the repo
          </a>
          , using:
        </p>
        <ul>
          <li>
            <a href="https://github.com/kaicataldo/eleventy-plugin-react/">
              Eleventy Plugin React
            </a>{' '}
            to use JSX for templating with no hydration bloat.
          </li>
          <li>
            Dynamic, async data retrieval data using the Pokémon API in{' '}
            <code>./src/pages/_data/getPokemon.js</code>
          </li>
          <li>
            Mapping over that data using{' '}
            <a href="https://www.11ty.dev/docs/pagination/">"Pagination"</a> in{' '}
            <code>./src/pages/pokemonPaginated.11ty.js</code>
          </li>
          <li>
            PostCSS & Tailwind CSS &{' '}
            <a href="https://github.com/tailwindlabs/tailwindcss-typography">
              Tailwind Typography
            </a>
          </li>
        </ul>
      </div>
      <Nav nav={getPokemon} currentUrl={page.url} />
    </ParentLayout>
  )
}
