// PACKAGES
import React from 'react'

// COMPONENTS
import NavSegment from './nav_segment'

const NavList = () => {
    return (
        <ul className="main-menu">
            <li className="nav-segment">
                <a className="nav-link" name="services">Services</a>
                <ul className="dropdown">
                    <NavSegment className="dropdown-segment" path="/services/facials" label="Facials" />
                    <NavSegment className="dropdown-segment" path="/services/waxing" label="Waxing" />
                    <NavSegment className="dropdown-segment" path="/services/add-ons" label="Add-Ons" />
                </ul>
            </li>

            <NavSegment className="nav-segment" path="/products" label="Products"/>
            <NavSegment className="nav-segment" path="/about" label="About Me"/>
            <NavSegment className="nav-segment" path="/contact" label="Contact"/>
        </ul>
    )
}

export default NavList