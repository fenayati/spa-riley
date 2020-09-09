import React from "react"

const WaxingService = ( {service, price} ) => {

    return(
        <div style={{color: "#cad2c5"}}>
            <h3 style={{fontFamily: "playfair display", marginBottom: 0}}>{service}</h3>
            <p style={{fontFamily: "playfair display"}}>{price}</p>
        </div>
    )

}

export default WaxingService