import React from 'react'

const VerticalCenterFlex = ( {children, classes} ) => {

    let className = ["vertical-center-flex"]
    
    if ( classes !== undefined ) {
        className.push(classes)
    }

    className = className.join(" ")

    return (
        <div className={className}>
            {children}
        </div>
    )

}

export default VerticalCenterFlex