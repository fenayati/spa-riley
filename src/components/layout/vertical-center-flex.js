import React from 'react'

// UTILS
import { classNameString } from '../../utils'

const VerticalCenterFlex = ( {children, classes} ) => {

    let className = classNameString("vertical-center-flex", classes)

    return (
        <div className={className}>
            {children}
        </div>
    )

}

export default VerticalCenterFlex