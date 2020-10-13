import React from 'react'

// UTILS
import { classNameString } from '../../../utils'

const Column = ( {children, classes, styles} ) => {

    let className = classNameString("column", classes)

    return (
        <div className={className} style={styles}>
            {children}
        </div>
    )
}

export default Column