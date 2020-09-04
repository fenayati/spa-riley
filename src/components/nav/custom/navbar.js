// PACKAGES
import React from 'react'
import NavSegment from './nav_segment'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import '../../../styles/layout/navbar.css'

const Navbar = () => {

    const data = useStaticQuery (
        graphql`
            query {
                logo: file(relativePath: {eq: "logo_transparent.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )    

    console.log(data)

    return(
        <div id="main_menu" style={{width: "100%", position: "relative", backgroundColor: "white", height: 110}}>
            <div 
                className="logo_area" 
                style={{
                    width: 150, 
                    height: 150, 
                    position: "absolute", 
                    left: "50%", 
                    top: 0, 
                    content: "", 
                    marginLeft: -75,
                    textAlign: "center"
                }}
            >
                <Link to="/">
                    <Img fluid={data.logo.childImageSharp.fluid} style={{width: 150, maxHeight: "100%"}} />
                </Link>
            </div>
            <div className="inner_main_menu" style={{margin: "0 auto", width: "90%"}}>
                <ul 
                    style={{
                        margin: 0, 
                        padding: 0, 
                        listStyle: "none", 
                        textAlign: "right", 
                        paddingTop: 31
                    }}
                >
                    {/* REPLACE NAV SEGMENT w/ BASIC LINK */}
                    {/* <NavSegment label="Services"/> */}
                    <li>
                        <Link>Services</Link>
                        <ul>
                            <NavSegment label="Facials" />
                            <NavSegment label="Waxing" />
                            <NavSegment label="Add-Ons" />
                        </ul>
                    </li>

                    <NavSegment path="/products" label="Products"/>
                    <NavSegment path="/about" label="About Me"/>
                    <NavSegment path="/contact" label="Contact"/>
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