import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Layout from "../../components/layout"
import Image from "../../components/image"
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

      <Helmet>
        <body class="has-background-dark" />
      </Helmet>

      <div className="container">
        <div className="columns">

          <div className="column">
            <Img fluid={data.waxingLegs.childImageSharp.fluid} />
          </div>
          <div className="column">
            <h2 className="has-text-centered has-text-white" style={{textTransform: "uppercase"}}>Waxing</h2>
            <div>
              
              {/* <h3 className="has-text-white" style={{marginBottom: 0}}>Half Leg/Full Leg</h3>
              <p className="has-text-white">$30-$50</p> */}
              {/* <WaxingService service="Half Leg/Full Leg" price="$30-$50" /> */}
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