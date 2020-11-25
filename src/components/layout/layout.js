/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import Header from "../header"

const Layout = ({ children, maxWidth }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const faSize = "2x"

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="main-div"
        style={{
          margin: `0px auto`,
          paddingTop: `110px`,
          paddingBottom: `75px`
        }}
      >
        <main>
          {children}
        </main>
      </div>
      <footer className="fixed-footer nav-text">
        <p style={{position: "absolute", top: "27px", marginBottom: 0, marginLeft: "15px"}}>© {new Date().getFullYear()}, Spa Riley, LLC</p>
        
        <ul className="social-icons">
          <li><FontAwesomeIcon icon={faInstagram} size={faSize}/></li>
        </ul>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
