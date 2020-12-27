// PACKAGES
import React from 'react'

// COMPONENTS
import NavSegment from './nav_segment'

const NavList = ( { sidenav } ) => {

    return (

        <ul className={`m-nav${sidenav ? " m-side-nav-list" : ""}`}>

            <li className={ sidenav ? "m-side-nav-segment" : "m-nav-segment" }>
                <a className={`fs-3 m-link${sidenav ? " m-side-nav-link" : " m-nav-link"}`} name="services">Services</a>

                <ul className={sidenav ? "m-side-nav-list" : "m-dropdown"} >

                    <NavSegment namespace={sidenav ? "m-side-nav" : "m-dropdown"} path="/services/facials" label="Facials" />
                    <NavSegment namespace={sidenav ? "m-side-nav" : "m-dropdown"} path="/services/waxing" label="Waxing" />
                    <NavSegment namespace={sidenav ? "m-side-nav" : "m-dropdown"} path="/services/add-ons" label="Add-Ons" />

                </ul>

            </li>

            <NavSegment namespace={sidenav ? "m-side-nav" : "m-nav"} path="/products" label="Products"/>
            <NavSegment namespace={sidenav ? "m-side-nav" : "m-nav"} path="/about" label="About Me"/>
            <NavSegment namespace={sidenav ? "m-side-nav" : "m-nav"} path="/contact" label="Contact"/>

        </ul>
    )

}

export default NavList