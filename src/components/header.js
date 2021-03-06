import PropTypes from "prop-types"
import React from "react"
// import Navbar from "../components/nav/bulma/navbar"
import Navbar from "../components/nav/navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
