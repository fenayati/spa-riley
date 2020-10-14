import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

// COMPONENTS
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Columns, Column, Container } from "../../components/layout/bulma"
import VerticalCenterFlex from "../../components/layout/vertical-center-flex"
import Window from '../../components/layout/window'

const AddOns = ({data}) => (

  <Layout>
    <SEO title="Products" />

    <Window>

      <VerticalCenterFlex>
  
        <Container classes={["site-font"]}>
    
          <Columns>
    
            <Column 
              styles = {{
                padding: 0, 
                height: 300, 
                width: "100%"
              }}
            >
              <Img 
                fluid={data.addOns.childImageSharp.fluid} 
                style={{
                  height: "100%",
                  border: "10px solid #2f3e46"
                }} 
              />
            </Column>
    
          </Columns>
    
          <Columns classes={["has-text-white"]}>
    
            <Column
              classes={["has-text-centered", "add-ons"]}
              styles={{color: "white", backgroundColor: "#2f3e46"}}
            >
    
              <h1>Additional Services</h1>
              <h4>Can be added to a custom facial or purchased as a stand alone service.</h4>
              <p>Microdermabrasion - 30 minutes - $45</p>
              <p>Chemical Peel (glycolic, lactic, salicyclic, or an AHA/BHA combination) - 15-45 minutes - $40</p>
              <p>Microcurrent - 20 minutes - $45</p>
              <p>LED - 20 minutes - $30</p>
              <p>Dermaplaning - 30 minutes - $30</p>
              
            </Column>
    
          </Columns>
    
        </Container>
        
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