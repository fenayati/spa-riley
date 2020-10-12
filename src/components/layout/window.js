import React from 'react'

const Window = ( {children} ) => {
    return (
        <div 
            style={{ 
            height: "calc(100vh - ( 75px + 110px ))",
            position: "relative"
            }}
        >
            {children}
        </div>
    )
}

export default Window