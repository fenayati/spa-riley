import React from "react"
import Img from 'gatsby-image'

// COMPONENTS
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import WaxingService from '../../components/waxing_service'
import { Columns, Column, Container } from "../../components/layout/bulma"
import Window from '../../components/layout/window'
import VerticalCenterFlex from '../../components/layout/vertical-center-flex'

// CSS
import '../../styles/pages/waxing.css'

const Waxing = ( {data} ) => {

  const waxingServices = [

    {
      service: "Half Leg/Full Leg",
      price: "$30-$50"
    },

    {
      service: "Bikini",
      price: "$40"
    },

    {
      service: "Stomach or Chest",
      price: "$25"
    },

    {
      service: "Underarms",
      price: "$25"
    },

    {
      service: "Brows",
      price: "$15"
    },

    {
      service: "Massage & Bodywork",
      price: "60 min, $100"
    },

  ]

  return (

    <Layout>

      <SEO title="Waxing" />

      <Window classes={["window-waxing"]}>
        
        <VerticalCenterFlex classes={["vertical-center-waxing"]}>

          <Container 
            styles={{
              paddingTop: "25px", 
              paddingBottom: "25px",
            }}
          >
            <Columns classes={["site-font"]} >
      
              <Column 
                classes={["has-text-centered", "has-text-white"]}
                styles={{
                  backgroundColor: "#2f3e46", 
                  padding: 0
                }}
              >
      
                <div style={{padding: "2em"}}>
                  <h2 
                    className="has-text-centered" 
                    style={{
                      textTransform: "uppercase", 
                      color: "white"
                    }}
                  >
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
      
              </Column>
      
              <Column styles={{padding: 0}}>
                <Img 
                  fluid={data.waxingLegs.childImageSharp.fluid} 
                  style={{
                    height: "100%",
                    border: "10px solid #2f3e46"
                  }}
                />
              </Column>
      
            </Columns>
          </Container>
        </VerticalCenterFlex>
      </Window>

    </Layout>

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