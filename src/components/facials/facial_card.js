import React from "react"
import Img from 'gatsby-image'
import { Col, Card } from 'react-bootstrap'

const FacialCard = ( {image, title, subtitle, description, columnSize} ) => {

    return(

        <Col sm={12} md lg xl style={{paddingTop: "15px", paddingBottom: "15px"}} >
            <Card className="bg-color-0 h-100 border-0" style={{borderRadius: 0}}>

                {/* height 0 + paddingTop 75% is for the 4:3 aspect ratio */}
                <Img 
                    className="w-100"
                    fluid={image} 
                    style={{
                        height: 0, 
                        paddingTop: "75%"
                    }} 
                />

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