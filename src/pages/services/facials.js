// PACKAGES
import React from "react"

// COMPONENTS
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FacialRow from '../../components/facials/facial_row'

const Facials = ( {data} ) => {

  const facialServices = [

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Acne Facial", 
      subtitle: "75 min, $125", 
      description: "Includes steaming, deep cleanse, extractions, detoxifying mask, LED blue light for killing bacteria and stopping the growth of new bacteria, ending with a soothing toner, recovery oil and SPF."
    },

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Signature Facial", 
      subtitle: "60 min, $100", 
      description: "Steam, cleanse, custom mask, extractions if needed, gua sha, ultrasonic skin scrubber, hand and arm massage, eye cream, serum/moisturizer, SPF."
    },

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Hyperpigmentation Facial", 
      subtitle: "60 min, $125", 
      description: "A facial targeted towards battling sun damage and discoloration, using a peel to lightly resurface the skin and prompt new cell turnover, vitamin C mask, vitamin C serum, hyaluronic acid moisturizer to fight dry skin and balance out the peel, ending with an SPF."
    },

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Hydrafacial", 
      subtitle: "60 min, $150", 
      description: "Deep cleanse, extract and hydrate with pressurized water that is best for more sensitive skin types. This facial will help skin texture, reduce discoloration, dehydration, pore size and leave skin with a radiant glow for up to a week with no down time."
    },

    {
      image: data.dualExfoliation.childImageSharp.fluid, 
      title: "Dual Exfoliation", 
      subtitle: "75 min, $150", 
      description: "Microdermabrasion and Dermaplaning to get rid of dead skin cell build up and leave skin feeling smooth and youthful. Toning, cleansing, serum, moisturizer, SPF."
    },

    {
      image: data.antiAgingFacial.childImageSharp.fluid, 
      title: "Relaxing Facial", 
      subtitle: "90 min, $125", 
      description: "Perfect for unwinding, using hot stones in combination with jade rollers to leave the skin feeling refreshed and awake. Includes a longer, hand, and arm massage with the option of a scalp massage. Soothing mask is used and followed up with toner, moisturizer and SPF."
    },

    // {
    //   image: data.massageBodywork.childImageSharp.fluid, 
    //   title: "Massage & Bodywork", 
    //   subtitle: "60 min, $100", 
    //   description: ""
    // },

  ]

  const numServices = facialServices.length

  // number of elements we want per row
  const productsPerRow = 3

  // array of N elements, where N is the number of rows needed
  const rows = Math.ceil( numServices / productsPerRow )

  // chunk the products into the array of rows
  const productRows = []
  for ( let i = 0 ; i < rows ; i++ ) {
    productRows.push(facialServices.slice(i * productsPerRow, i * productsPerRow + productsPerRow))
  }

  return (  
    <Layout maxWidth="90%">
      
      <SEO title="Facials" />

      {/* 08.29.20: ADD BULMA COLUMNS  */}
      <div className="container">

        {        
          productRows.map( (row, i) =>
            <FacialRow key={i} products={row}/>
          )
        }

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