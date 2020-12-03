import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// COMPONENTS
import SEO from "../components/seo"
import Window from '../components/layout/window'
import { Container, Row, Col } from 'react-bootstrap'

// STYLES
import '../styles/pages/index.css'
import VerticalCenterFlex from "../components/layout/vertical-center-flex"

const IndexPage = ( {data} ) => (

  <>

    <SEO 
      title="Home" 
      path="/"
    />

    <div 
      className="sale-banner"
      style={{
        margin: `0px auto`,
        maxWidth: 960,
        paddingLeft: `1.0875rem`,
        paddingRight: `1.0875rem`
      }}
    >
      <VerticalCenterFlex>
        
        <Container className="bg-color-0">
          <div style={{padding: "20px"}}>
            15% Off Your First Service
          </div>
        </Container>
        
      </VerticalCenterFlex>

    </div>

    <div 
      style={{
        margin: `0px auto`,
        maxWidth: 960,
        paddingLeft: `1.0875rem`,
        paddingRight: `1.0875rem`
      }}
    >
      <Window className="window-index">
  
        <VerticalCenterFlex>

          <Container>
  
            <Row>
  
              <Col sm={6} className="p-0">

                <div className="bg-color-0 p-0 h-100">

                  <VerticalCenterFlex>

                    <h1 className='spa-riley'>
                      Spa Riley: Putting Self Love First
                    </h1>

                  </VerticalCenterFlex>

                </div>

              </Col>
              
              <Col sm={6} className="p-0">

                <div className="p-0 border-10px-color-0 h-100">

                  <Img
                    className="h-100" 
                    fluid={data.stones.childImageSharp.fluid} 
                  /> 
                  
                </div>
                
              </Col>
              
            </Row>

          </Container>

        </VerticalCenterFlex>

      </Window>
    </div>

  </>

)

export default IndexPage

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    stones: file(relativePath: {eq: "index/stones.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`