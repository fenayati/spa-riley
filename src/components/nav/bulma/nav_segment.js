import React from 'react'

import { Link } from 'gatsby'

const NavSegment = ( { classes, path, label } ) => {

	return (

		<Link className={`navbar-item${typeof classes !== 'undefined' ? ' ' + classes : ''}`} to={path}>{label}</Link>

	)

}

export default NavSegment