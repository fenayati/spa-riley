import React from 'react'

const VerticalCenter = ( {children, classes} ) => {

    let className = ["vertical-center"]
    
    if ( classes !== undefined ) {
        className.push(classes)
        className = className.join(" ")
    }

    return (
        <div className={className}>
            {children}
        </div>
    )

}

export default VerticalCenter