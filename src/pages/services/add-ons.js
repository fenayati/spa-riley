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

      <VerticalCenterFlex classes={["vertical-center-add-ons"]}>
  
        <div className="super-container">

          <Container>
      
            <Row>
      
              <Col>

                <div 
                  className="pad-0 border-10px-color-0"
                  style = {{
                    height: 300, 
                    width: "100%"
                  }}
                >

                  <Img 
                    fluid={data.addOns.childImageSharp.fluid} 
                    style={{
                      height: "100%"
                    }} 
                  />

                </div>
                 
              </Col>
      
            </Row>
      
            <Row>
      
              <div className="has-text-white">

                <Col>
        
                  <div className="has-text-centered add-ons bg-color-0 has-text-white">

                    <h1>Additional Services</h1>
                    <h4 className="upper">Can be added to a custom facial or purchased as a stand alone service.</h4>
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
        
        </div>
        
      </VerticalCenterFlex>

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