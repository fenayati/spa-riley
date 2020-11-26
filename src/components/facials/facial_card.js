import React from "react"
import Img from 'gatsby-image'
import { Col, Card } from 'react-bootstrap'

const FacialCard = ( {image, title, subtitle, description, columnSize} ) => {

    return(

        <Col>
            <Card className="bg-color-0" style={{height: "100%", border: 0, borderRadius: 0}}>

                {/* height 0 + paddingTop 75% is for the 4:3 aspect ratio */}
                <Img fluid={image} style={{width: "100%", height: 0, paddingTop: "75%"}} />

                <Card.Body>
                
                    <div className="text-white text-center">

                        <h2 className="text-uppercase">
                            {title}
                        </h2>
                        <h3>{subtitle}</h3>
                        <p>{description}</p>
                    </div>
                    
                </Card.Body>
            </Card>
        </Col>

    )

}

export default FacialCard