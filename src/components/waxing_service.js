import React from "react"

const WaxingService = ( {service, price} ) => {

    return(
        <div>
            <h3 className="has-text-white" style={{marginBottom: 0}}>{service}</h3>
            <p className="has-text-white">{price}</p>
        </div>
    )

}

export default WaxingService