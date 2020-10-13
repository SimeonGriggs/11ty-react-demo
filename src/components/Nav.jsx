import PropTypes from 'prop-types'
import React from 'react'

const Nav = ({ nav, currentUrl }) => {
  const linkClasses = `transition-colors duration-200 font-bold flex p-1 uppercase text-xs`

  return (
    <nav className="grid grid-cols-3 gap-x-6 justify-center mb-6">
      <a
        className={`${linkClasses} text-blue-500 hover:text-blue-700`}
        href="/"
      >
        Home
      </a>
      {nav.map((item) => (
        <a
          className={`${linkClasses} ${
            currentUrl === `/${item.name}/`
              ? `bg-blue-500 text-white`
              : `text-blue-500 hover:text-blue-700`
          }`}
          key={item.name}
          href={`/${item.name}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  nav: PropTypes.array,
  currentUrl: PropTypes.string,
}

Nav.defaultProps = {
  nav: [],
  currentUrl: '/',
}

export default Nav
