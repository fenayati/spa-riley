import React from "react"

const WaxingService = ( {service, price} ) => {

    return(
        <div className="text-white">
            <h3 style={{marginBottom: 0}}>{service}</h3>
            <p>{price}</p>
        </div>
    )

}

export default WaxingService