import React from "react"
import Img from 'gatsby-image'

const FacialCard = ( {image, title, subtitle, description, columnSize} ) => {

    return(
        <div className={`column${columnSize ? " " + columnSize : ""}`}>
            <div className="card bg-color-0" style={{height: "100%"}}>
                <div className="card-image">
                    <figure className="image">
                    <Img fluid={image} style={{width: "100%", height: 0, paddingTop: "75%"}} />
                    </figure>
                </div>
                <div className="card-content">
                    <div 
                        className="content has-text-white"
                    >
                        <h2 className="has-text-centered has-text-white upper">
                                {title}
                            </h2>
                        <h3 
                            className="has-text-centered has-text-white"
                        >
                            {subtitle}
                        </h3>
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