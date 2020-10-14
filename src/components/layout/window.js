import React from 'react'

// UTILS
import { classNameString } from '../../utils'

const Window = ( {children, classes} ) => {

    let className = classNameString("window", classes)

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Window