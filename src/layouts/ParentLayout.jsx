import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const ParentLayout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="https://simeongriggs.dev/" />
      <link rel="stylesheet" href="/layout.css" />
    </Helmet>
    <section className="container mx-auto my-6 p-6 bg-gray-100 rounded-lg">
      {children}
    </section>
     <script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script> 
  </>
)

ParentLayout.propTypes = {
  children: PropTypes.node,
}

ParentLayout.defaultProps = {
  children: ``,
}

export default ParentLayout
