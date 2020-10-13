import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const ParentLayout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://simeongriggs.dev/" />
      <link rel="stylesheet" href="/layout.css" />
    </Helmet>
    <section className="container mx-auto my-6 p-6 bg-gray-100 rounded-lg">
      {children}
    </section>
  </>
)

ParentLayout.propTypes = {
  children: PropTypes.node,
}

ParentLayout.defaultProps = {
  children: ``,
}

export default ParentLayout
