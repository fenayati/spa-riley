import React from 'react'

const Window = ( {children, classes} ) => {

    let className = ["window"]
    
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

export default Window