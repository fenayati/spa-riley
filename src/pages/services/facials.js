// PACKAGES
import React from "react"

// COMPONENTS
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import FacialRow from '../../components/facials/facial_row'
import { Container } from 'react-bootstrap'

const Facials = ( {data} ) => {

  const facialServices = [

    {
      image: data.acne.childImageSharp.fluid, 
      title: "Signature", 
      subtitle: "60 min, $100", 
      description: "Steam, cleanse, custom mask, extractions if needed, gua sha, ultrasonic skin scrubber, hand and arm massage, eye cream, serum/moisturizer, SPF."
    },

    {
      image: data.customFacial.childImageSharp.fluid, 
      title: "Hyperpigmentation", 
      subtitle: "60 min, $125", 
      description: "A facial targeted towards battling sun damage and discoloration, using a peel to lightly resurface the skin and prompt new cell turnover, vitamin C mask, vitamin C serum, hyaluronic acid moisturizer to fight dry skin and balance out the peel, ending with an SPF."
    },

    {
      image: data.facialDude.childImageSharp.fluid, 
      title: "Acne", 
      subtitle: "75 min, $125", 
      description: "Includes steaming, deep cleanse, extractions, detoxifying mask, LED blue light for killing bacteria and stopping the growth of new bacteria, ending with a soothing toner, recovery oil and SPF."
    },

    {
      image: data.dualExfoliation.childImageSharp.fluid, 
      title: "Dual Exfoliation", 
      subtitle: "75 min, $150", 
      description: "Microdermabrasion and Dermaplaning to get rid of dead skin cell build up and leave skin feeling smooth and youthful. Toning, cleansing, serum, moisturizer, SPF."
    },

    {
      image: data.hydrafacial.childImageSharp.fluid, 
      title: "Contouring", 
      subtitle: "75 min, $125", 
      description: "Using microcurrent and high frequency, this facial helps to tighten and sculpt the face for a more youthful appearance. Gua sha and crystal rollers are also used to ensure less inflammation by detoxifying and draining the lymphatic system. Facial cupping can be added on."
    },

    {
      image: data.antiAgingFacial.childImageSharp.fluid, 
      title: "Relaxing", 
      subtitle: "90 min, $125", 
      description: "Perfect for unwinding, using hot stones in combination with jade rollers to leave the skin feeling refreshed and awake. Includes a longer, hand, and arm massage with the option of a scalp massage. Soothing mask is used and followed up with toner, moisturizer and SPF."
    },

    {
      image: data.antiAgingFacial.childImageSharp.fluid, 
      title: "Jelly", 
      subtitle: "75 min, $100", 
      description: "Choose between a variety of masks depending on what skin concern you want to target, this jelly mask leaves skin feeling refreshed while also locking in serums applied beforehand. Perfect to book before a night out! Hand and arm massage included."
    },

    {
      image: data.maskne.childImageSharp.fluid, 
      title: "Maskne", 
      subtitle: "75 min, $125", 
      description: "Our world has changed and it has caused an impact on the health of our skin. Wearing a face mask leads to more breakouts for people, dryer skin, rashes and in general more congestion. This facial focuses on decongesting the area of the face that is covered by masks by doing a double cleanse, extractions, clay mask and blue light for killing bacteria to help reduce the negative effects of wearing a face mask."
    },

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

      <div className="super-container">

        <div 
          // style={{
          //   paddingTop: "1rem",
          //   paddingBottom: "1rem"
          // }}
        >
  
          <Container>
            {        
              productRows.map( (row, i) =>
                <FacialRow key={i} products={row}/>
              )
            }
          </Container>
  
        </div>
      </div>

    </Layout>
  )
}

export default Facials

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    customFacial: file(relativePath: {eq: "facials/smiling-lady.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dualExfoliation: file(relativePath: {eq: "facials/facial_2/facial_2_square.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    antiAgingFacial: file(relativePath: {eq: "facials/facial_3/facial_3_square.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    facialDude: file(relativePath: {eq: "facials/facial_dude_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    acne: file(relativePath: {eq: "facials/acne.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hydrafacial: file(relativePath: {eq: "facials/hydrafacial_3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maskne: file(relativePath: {eq: "facials/maskne.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`