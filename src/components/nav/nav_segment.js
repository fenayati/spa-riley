import React from 'react'
import { Link } from 'gatsby'

const NavSegment = ( { path, label } ) => {

	return (

		<li>
            <Link to={path}>{label}</Link>
        </li>

	)

}

export default NavSegment