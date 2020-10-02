import React from "react"
import Img from 'gatsby-image'

const FacialCard = ( {image, title, subtitle, description, columnSize} ) => {

    return(
        <div className={`column${columnSize ? " " + columnSize : ""}`}>
            <div className="card" style={{height: "100%", backgroundColor: "#2F3E46"}}>
                <div className="card-image">
                    <figure className="image">
                    <Img fluid={image} style={{width: "100%", height: 0, paddingTop: "75%"}} />
                    </figure>
                </div>
                <div className="card-content">
                    <div 
                        className="content" 
                        style={{color: "white"}}
                    >
                        <h2 
                            className="has-text-centered" 
                            style={{
                                textTransform: "uppercase", 
                                color: "white"
                            }}>
                                {title}
                            </h2>
                        <h3 
                            className="has-text-centered" 
                            style={{
                                color: "white"
                            }}
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