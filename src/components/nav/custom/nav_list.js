// PACKAGES
import React from 'react'

// COMPONENTS
import NavSegment from './nav_segment'

const NavList = () => {
    return (
        <ul id="main-menu">
            <li>
                <a name="services">Services</a>
                <ul>
                    <NavSegment path="/services/facials" label="Facials" />
                    <NavSegment path="/services/waxing" label="Waxing" />
                    <NavSegment path="/services/add-ons" label="Add-Ons" />
                </ul>
            </li>

            <NavSegment path="/products" label="Products"/>
            <NavSegment path="/about" label="About Me"/>
            <NavSegment path="/contact" label="Contact"/>
        </ul>
    )
}

export default NavList