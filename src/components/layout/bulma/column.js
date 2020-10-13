import React from 'react'

const Column = ( {children, classes, styles} ) => {

    let className = ["column"]
    
    if ( classes !== undefined ) {
        className.push(classes)
    }

    className = className.join(" ")

    return (
        <div className={className} style={styles}>
            {children}
        </div>
    )
}

export default Column