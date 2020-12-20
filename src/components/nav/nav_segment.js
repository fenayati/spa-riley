import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavSegment = ( { path, label, namespace } ) => {

	return (

		<li className={namespace + '-segment'}>
            <Link className={`${namespace + '-link'}${namespace === 'm-dropdown' ? " fs-5" : " fs-3"}`} to={path}>{label}</Link>
        </li>

	)

}

export default NavSegment

NavSegment.propTypes = {
	namespace: PropTypes.any.isRequired
}