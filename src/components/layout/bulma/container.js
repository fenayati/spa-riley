import React from 'react'

const Container = ( {children, styles} ) => {
    return (
        <div 
            className="container"
            style={styles}
        >
            {children}
        </div>
    )
}

export default Container