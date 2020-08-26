// THE NAVBAR COMPONENT IS NOT GOING TO HAVE STATE. CAN JUST BE A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT

import React from 'react' ;

import { Link } from 'gatsby' ;

const NavSegment = (props) => {
		
	return (
		
		<li className={`sidenav-close${props.activeTab === props.label ? ' active' : '' }`} onClick={() => props.action(props.label)}>
			<Link className="eggshell-text" to={props.url}>{props.label}</Link>
			{/* <a href="#" className="eggshell-text" to={props.url}>{props.label}</a> */}
		</li>

	)

} ;

export default NavSegment ;