import React from 'react'
import FacialCard from './facial_card'

const FacialRow = ({products}) => {

    const numServices = products.length

    const columnSize = 12 % numServices === 0 ? "is-" + 12/numServices : ""

    return (
        <div className="columns">

            {/* 08.30.20: MAP THE FACIALS BULMA CARD COMPONENT */}
            {
                products.map( (service, i) => 
                    <FacialCard 
                        key={i}
                        image={service.image} 
                        title={service.title} 
                        subtitle={service.subtitle} 
                        description={service.description}
                        columnSize={columnSize}
                    />
                )
            }

        </div>
    )
}

export default FacialRow