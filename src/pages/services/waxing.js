import React from "react"
import Img from 'gatsby-image'

// COMPONENTS
import SEO from "../../components/seo"
import WaxingService from '../../components/waxing_service'
import Window from '../../components/layout/window'
import VerticalCenterFlex from '../../components/layout/vertical-center-flex'
import { Container, Row, Col } from 'react-bootstrap'

// CSS
import '../../styles/pages/services/waxing.css'

// DATA
import waxingServices from '../../utils/data/waxing.json'

const Waxing = ( {data} ) => {

  return (

    <>

      <SEO 
        title="Waxing" 
        path="/waxing"
      />

      <Window className="window-waxing">

        <div className="super-container">
        
          <VerticalCenterFlex>

              <Container>
                
                <Row>
          
                  <Col 
                    sm={6} 
                    className="p-0"
                  >
          
                    <div className="text-center text-white bg-color-0 h-100">
                      <div style={{padding: "2em"}}>
                        <h2 className="text-center text-white text-uppercase">
                          Waxing
                        </h2>
                        <div>
                          {
                            waxingServices.map(service => 
                              <WaxingService 
                                service={service.service} 
                                price={service.price} 
                              />
                            )
                          }
                        </div>
                      </div>
                    </div>
          
                  </Col>
          
                  <Col sm={6} className="p-0">

                    <div className="border-10px-color-0 h-100">

                      <Img
                        className="h-100"
                        fluid={data.waxingLegs.childImageSharp.fluid}
                      />

                    </div>
                    
                  </Col>
          
                </Row>
              </Container>

          </VerticalCenterFlex>

        </div>

      </Window>

    </>

  )

}

export default Waxing

// 08.31.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    waxingLegs: file(relativePath: {eq: "waxing/waxing_1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`