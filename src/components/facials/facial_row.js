import React from 'react'
import FacialCard from './facial_card'
import { Row } from 'react-bootstrap'

const FacialRow = ({products}) => {

    const numServices = products.length

    const columnSize = 12 % numServices === 0 ? "is-" + 12/numServices : ""

    return (

        <Row style={{paddingTop: "15px", paddingBottom: "15px"}}>

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

        </Row>

    )
}

export default FacialRow