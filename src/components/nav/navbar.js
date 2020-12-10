// PACKAGES
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// COMPONENTS
import NavList from './nav_list'

// import '../../../styles/layout/navbar.css'

const Navbar = () => {

    const data = useStaticQuery (
        graphql`
            query {
                logo: file(relativePath: {eq: "logo_transparent_multi_v4.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )    

    function openNav() {
        document.getElementById('side-nav').style.width = "200px"
    }

    function closeNav() {
        document.getElementById('side-nav').style.width = "0"
    }

    return(
        <div id="navbar">
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

            {/* 09.06.20 - HAMBURGER ICON */}
            <span 
                id="hamburger" 
                style={{
                    fontSize: 30, 
                    cursor: "pointer"
                }} 
                onClick={openNav}
                onKeyDown={openNav}
                role="button"
                tabIndex="0"
            >
                &#9776;  
            </span>

            <div className="inner_main_menu" style={{margin: "0 auto", width: "90%"}}>
                <NavList />
            </div>

            {/* 09.06.20 - SIDENAV DIV */}
            <div id="side-nav">
                <button className="closebtn" style={{cursor: "pointer"}} onClick={closeNav}>&times;</button>
                <NavList />
            </div>

        </div>
    )

}

export default Navbar