import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

// COMPONENTS
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import VerticalCenterFlex from "../../components/layout/vertical-center-flex"
import Window from '../../components/layout/window'
import { Container, Row, Col } from 'react-bootstrap'

// CSS
import '../../styles/pages/services/add-ons.css'

const AddOns = ({data}) => (

  <Layout>
    
    <SEO title="Products" />

    
    <Window classes={["window-add-ons"]}>

      {/* <div className="super-container"> */}

        <VerticalCenterFlex>
  
          <Container>
      
            <Row>
      
              <Col>

                <div 
                  className="p-0 border-10px-color-0 w-100"
                  style = {{
                    height: 300
                  }}
                >

                  <Img 
                    className="h-100"
                    fluid={data.addOns.childImageSharp.fluid}
                  />

                </div>
                 
              </Col>
      
            </Row>
      
            <Row>
      
              <div className="text-white w-100">

                <Col>
        
                  <div className="text-center add-ons bg-color-0 text-white py-1">

                    <h1>Additional Services</h1>
                    <h4 className="text-uppercase">Can be added to a custom facial or purchased as a stand alone service.</h4>
                    <p>Microdermabrasion - 30 minutes - $45</p>
                    <p>Chemical Peel (glycolic, lactic, salicyclic, or an AHA/BHA combination) - 15-45 minutes - $40</p>
                    <p>Microcurrent - 20 minutes - $45</p>
                    <p>LED - 20 minutes - $30</p>
                    <p>Dermaplaning - 30 minutes - $30</p>
                    
                  </div>
                  
                </Col>

              </div>
      
            </Row>
      
          </Container>
        
        </VerticalCenterFlex>

      {/* </div> */}

    </Window>
    
  </Layout>
)

export default AddOns

export const query = graphql`
  query {
    addOns: file(relativePath: {eq: "additional-services/stones.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`