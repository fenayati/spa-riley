// PACKAGES
import React from "react"

// COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FacialCard from '../../components/facial_card'

const Facials = ( {data} ) => {

  const facialServices = [

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Custom Facial", 
      subtitle: "60 min, $200", 
      description: "This nourishing treatment will make you shine."
    },

    {
      image: data.dualExfoliation.childImageSharp.fluid, 
      title: "Dual Exfoliation", 
      subtitle: "60 min, $150", 
      description: "Experience a deep cleansing and leave with baby soft skin. A combination of Microdermabrasion and derma planing removes dead skin cell build up, unclogs pores and gets rid of unwanted peach fuzz."
    },

    {
      image: data.antiAgingFacial.childImageSharp.fluid, 
      title: "Anti Aging Facial", 
      subtitle: "30 min, $190", 
      description: "Rewind the clock with this facial targeted towards those with mature or sun damaged skin. Using microcurrent technology to lift, contour and decrease wrinkles. Red LED light for anti-aging. Includes mask."
    },

    // {
    //   image: data.massageBodywork.childImageSharp.fluid, 
    //   title: "Massage & Bodywork", 
    //   subtitle: "60 min, $100", 
    //   description: ""
    // },

  ]

  const numServices = facialServices.length

  const columnSize = 12 % numServices === 0 ? "is-" + 12/numServices : ""

  return (  
    <Layout maxWidth="90%">
      
      <SEO title="Facials" />

      {/* 08.29.20: ADD BULMA COLUMNS  */}
      <div className="container">
        
        <div className="columns">

          {/* 08.30.20: MAP THE FACIALS BULMA CARD COMPONENT */}
          {
            facialServices.map(service => 
              <FacialCard 
                image={service.image} 
                title={service.title} 
                subtitle={service.subtitle} 
                description={service.description}
                columnSize={columnSize}
              />
            )
          }

        </div>
      </div>

    </Layout>
  )
}

export default Facials

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    customFacial: file(relativePath: {eq: "facials/facial_1/facial_1_square.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dualExfoliation: file(relativePath: {eq: "facials/facial_2/facial_2_square.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    antiAgingFacial: file(relativePath: {eq: "facials/facial_3/facial_3_square.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`