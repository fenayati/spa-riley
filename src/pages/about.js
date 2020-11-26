import React from "react"
import Img from 'gatsby-image'

// COMPONENTS
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import VerticalCenterFlex from '../components/layout/vertical-center-flex'
import Window from '../components/layout/window'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

// CSS
import '../styles/pages/about.css'

const About = ({data}) => (

  <Layout maxWidth={1200}>

    <SEO title="About Me" />

    <Window classes={["window-about"]}>

      <VerticalCenterFlex classes={["vertical-center-about"]}>
  
        <div className="super-container"
        >
          <Container>
      
            <Row>
        
              
              <Col>
                <div className="p-0 border-10px-color-0">
                  <Img 
                    fluid={data.portrait.childImageSharp.fluid}
                    style={{
                      height: "100%",
                    }} 
                  />
                </div>
              </Col>
              
        
              <Col>
        
                <div className="text-center text-white bg-color-0 p-0">

                  <div style={{padding: "2em"}}>

                    <h1>Riley White</h1>
          
                    <p>My name is Riley and I am the proud owner of Spa Riley. I grew up in Chagrin Falls and have spent time in other places but felt being here would be the right setting for my business. Growing up I experienced acne as a teen and often felt like going to an esthetician was embarassing.</p>
          
                    <p>My goal is to provide a safe sanctuary where clients feel comfortable and are able to trust me with their skin journey. I believe our skin's health is both impacted by outside and inside factors, so I like to get to know my clients and come up with a home care routine that works with their lifestyle. Whether you are experiencing acne, loss of elasticity, hyperpigmentation or other skin concerns, I am here to help!</p>
          
                    <p>Outside of the spa, I spend more time than I'd like to admit talking to my two dogs. I look at taking the time to come to the spa as carving out a little time for yourself, which is very important.</p>
          
                    <p>Book your first service and let's get started to making you feel as fabulous as you really are!</p>
                    
                  </div>

                </div>
        
              </Col>
        
            </Row>
            
          </Container>
        </div>
        
      </VerticalCenterFlex>

    </Window>
  
  </Layout>

)

export default About

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    portrait: file(relativePath: {eq: "portrait.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`