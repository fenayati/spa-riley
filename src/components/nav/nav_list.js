// PACKAGES
import React from 'react'

// COMPONENTS
import NavSegment from './nav_segment'

const NavList = () => {
    return (
        <ul className="main-menu">
            <li className="m-nav-segment">
                <a className="m-nav-link nav-link" name="services">Services</a>
                <ul className="m-dropdown">
                    <NavSegment namespace="m-dropdown" path="/services/facials" label="Facials" />
                    <NavSegment namespace="m-dropdown" path="/services/waxing" label="Waxing" />
                    <NavSegment namespace="m-dropdown" path="/services/add-ons" label="Add-Ons" />
                </ul>
            </li>

            <NavSegment namespace="m-nav" path="/products" label="Products"/>
            <NavSegment namespace="m-nav" path="/about" label="About Me"/>
            <NavSegment namespace="m-nav" path="/contact" label="Contact"/>
        </ul>
    )
}

export default NavList