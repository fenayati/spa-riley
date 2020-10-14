import React from 'react'

// UTILS
import { classNameString } from '../../../utils'

const Container = ( {children, styles, classes} ) => {

    let className = classNameString("container", classes)

    return (
        <div 
            className={className}
            style={styles}
        >
            {children}
        </div>
    )
}

export default Container