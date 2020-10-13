import PropTypes from 'prop-types'
import React from 'react'

const Heading = ({ children }) => (
  <h1 className="font-black text-4xl">{children}</h1>
)

Heading.propTypes = {
  children: PropTypes.node,
}

Heading.defaultProps = {
  children: '',
}

export default Heading
