// PACKAGES
import React from 'react'
import NavSegment from './nav_segment'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../../../styles/layout/navbar.css'

const Navbar = () => {

    const data = useStaticQuery (
        graphql`
            query {
                logo: file(relativePath: {eq: "logo_transparent.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )    

    console.log(data)

    return(
        <div id="main_menu">
            <div className="logo_area">
                <Link to="/">
                    <Img fluid={data.logo.childImageSharp.fluid} style={{height: "100%"}} />
                </Link>
            </div>
            <div className="inner_main_menu" style={{margin: "0 auto", width: "90%"}}>
                <ul style={{margin: 0, padding: 0, listStyle: "none", textAlign: "right"}}>
                    <NavSegment label="Home"/>
                    <NavSegment label="Services"/>
                    <NavSegment label="Products"/>
                    <NavSegment path="/about" label="About Me"/>
                    <NavSegment label="Contact"/>
                </ul>
            </div>
        </div>
    )

}

export default Navbar

// export const query = graphql`
//   query {
//     logo: file(relativePath: {eq: "logo_transparent.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `