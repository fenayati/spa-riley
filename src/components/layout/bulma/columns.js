import React from 'react'

// UTILS
import { classNameString } from '../../../utils'

const Columns = ( {children, classes} ) => {

    let className = classNameString("columns", classes)

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Columns