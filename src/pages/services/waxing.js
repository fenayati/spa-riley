import React from "react"
import Img from 'gatsby-image'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WaxingService from '../../components/waxing_service'

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

      <SEO title="Products" />

      <div className="columns site-font" style={{marginBottom: "2em"}}>

        <div 
          className="column has-text-centered has-text-white" 
          style={{
            backgroundColor: "#2f3e46", 
            padding: 0
          }}
        >
          <div style={{padding: "2em"}}>
            <h2 
              className="has-text-centered" 
              style={{
                textTransform: "uppercase", 
                color: "#cad2c5"
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
        </div>

        <div 
          className="column" 
          style={{padding: 0}}
        >
          <Img fluid={data.waxingLegs.childImageSharp.fluid} style={{height: "100%"}}/>
        </div>

      </div>

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