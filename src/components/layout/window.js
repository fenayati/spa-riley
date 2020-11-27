import React from 'react'

// UTILS
import { classNameString } from '../../utils'

const Window = ( {children, className} ) => {

    className = classNameString("window", className)

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Window