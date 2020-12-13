import React from 'react'
import { Link } from 'gatsby'

const NavSegment = ( { path, label, className } ) => {

	return (

		<li className={className}>
            <Link className="nav-link" to={path}>{label}</Link>
        </li>

	)

}

export default NavSegment