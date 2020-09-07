// PACKAGES
import { Link } from 'gatsby'
import React from 'react'

// COMPONENTS
import NavSegment from './nav_segment'

const NavList = () => {
    return (
        <ul id="main-menu" 
            // style={{
            //     margin: 0, 
            //     padding: 0, 
            //     listStyle: "none", 
            //     textAlign: "right", 
            //     paddingTop: 31
            // }}
        >
            <li>
                <Link>Services</Link>
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