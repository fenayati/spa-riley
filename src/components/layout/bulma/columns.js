import React from 'react'

const Columns = ( {children, classes} ) => {

    let className = ["columns"]
    
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

export default Columns