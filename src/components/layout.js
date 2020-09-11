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
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


import Header from "./header"

// STYLES
import '../styles/sass/mystyles.scss'
import "../styles/layout/layout.css"
import '../styles/layout/navbar.css'
import '../styles/layout/footer.css'

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

  if (maxWidth === undefined){
    maxWidth = 960
  }

  const faSize = "2x"

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="main-div"
        style={{
          margin: `3em auto`,
          // maxWidth: 960,
          maxWidth: maxWidth,
          padding: `0 1.0875rem 1.45rem`,

          // 09.08.20 - ATTEMPTS TO REMOVE WHITESPACE
          // overflowY: "scroll"
          // minHeight: "100%"

        }}
      >
        <main 
          style={{

            // 09.07.20 - NOW THAT THE NAVBAR IS FIXED, PUSH REST OF PAGE DOWN COMMENSURATELY. NAVBAR IS 110PX
            paddingTop: 110
            
          }}
        >
          {children}
        </main>
      </div>
      <footer className="fixed-footer nav-text">
        <p style={{position: "absolute", top: "27px", marginBottom: 0, marginLeft: "15px"}}>© {new Date().getFullYear()}, Spa Riley, LLC</p>
        
        <ul className="social-icons">
          <li><FontAwesomeIcon icon={faInstagram} size={faSize}/></li>
          <li><FontAwesomeIcon icon={faFacebookSquare} size={faSize}/></li>
        </ul>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
