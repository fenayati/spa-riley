import React from 'react' ;
import NavSegment from './nav_segment' ;

const NavList = ({activeTab, action}) => {
	
	return (
		
		<div>
            {/* <NavSegment url='/filemaker' label="FileMaker Consulting"/> */}
            <NavSegment activeTab={activeTab} url='/' label="Home" action={action}/>
            <NavSegment activeTab={activeTab} url='/services' label="Services" action={action}/>
            <NavSegment activeTab={activeTab} url='/products' label="Products" action={action}/>
            <NavSegment activeTab={activeTab} url='/contact' label="Contact" action={action}/>
            <NavSegment activeTab={activeTab} url='/about' label="About Me" action={action}/>
        </div>
    )
    
} ;

export default NavList ;