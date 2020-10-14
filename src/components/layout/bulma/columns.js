import React from 'react'

// UTILS
import { classNameString } from '../../../utils'

const Columns = ( {children, classes, styles} ) => {

    let className = classNameString("columns", classes)

    return (
        <div 
            className={className}
            style={styles}
        >
            {children}
        </div>
    )
}

export default Columns