import React from "react"
import Img from 'gatsby-image'

const FacialCard = ( {image, title, subtitle, description, columnSize} ) => {

    return(
        <div className={`column${columnSize ? " " + columnSize : ""}`}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-square pt-0">
                    <Img fluid={image} />
                    </figure>
                </div>
                <div className="card-content" style={{backgroundColor: "#2F3E46"}}>
                    <div className="content" style={{color: "#CAD2C5"}}>
                        <h2 className="has-text-centered" style={{textTransform: "uppercase", color: "#CAD2C5"}}>{title}</h2>
                        <h3 className="has-text-centered" style={{color: "#CAD2C5"}}>{subtitle}</h3>
                        <p className="has-text-centered">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FacialCard