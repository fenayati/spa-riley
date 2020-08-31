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
                <div className="card-content has-background-black">
                    <div className="content">
                    <h2 className="brown has-text-centered" style={{textTransform: "uppercase"}}>{title}</h2>
                    <h3 className="has-text-white has-text-centered">{subtitle}</h3>
                    <p className="has-text-white has-text-centered">
                        {description}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FacialCard