import React from "react"
import PropTypes from "prop-types"
import Navbar from '../components/globals/navbar'
import "./layout.css"
// import "./bootstrap.min.css"

// import '../sass/layout.sass'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
