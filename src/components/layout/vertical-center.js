import React from 'react'

// UTILS
import { classNameString } from '../../utils'

const VerticalCenter = ( {children, classes} ) => {

    let className = classNameString("vertical-center", classes)

    return (
        <div className={className}>
            {children}
        </div>
    )

}

export default VerticalCenter