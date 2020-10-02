import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AddOns = ({data}) => (

  <Layout>
    <SEO title="Products" />

    <div className="container site-font">

      <div 
        className="columns" 
        style={{
          // marginBottom: "1em"
        }}
      >

        {/* 09.01.20: PHOTO DIV */}
        {/* <div style={{height: 200, width: "100%"}}></div> */}

        <div 
          className="column" 
          style={{
            padding: 0, 
            height: 200, 
            width: "100%"
          }}
        >
          <Img fluid={data.addOns.childImageSharp.fluid} style={{height: "100%"}} />
        </div>

      </div>

      <div 
        className="has-text-white columns" 
        style={{
          // minHeight: 200
        }}
      >

        {/* ADD ONS */}
        {/* <div className="column" style={{margin: "1em"}}>
          <h1>Book Now</h1>
          <p style={{margin: 0}}>Chagrin Falls, Ohio 44022</p>
          <p style={{margin: 0}}><Link className="has-text-white" to="mailto:rdw7795@gmail.com">rdw7795@gmail.com</Link></p>
          <p style={{margin: 0}}>(440) 667-9617</p>
        </div> */}

        {/* HOURS */}
        {/* <div className="column" style={{margin: "1em"}}>
          <h1>Hours</h1>
          <p style={{margin: 0}}>Tues-Thurs: 11am - 4pm</p>
          <p style={{margin: 0}}>Sat: 10am - 5pm</p>
          <p style={{margin: 0}}>Sun: 10am - 5pm</p>
        </div> */}

        <div 
          className="has-text-centered add-ons column" 
          style={{
            marginBottom: "2em", 
            color: "white", 
            backgroundColor: "#2f3e46", 
            padding: "2em"
          }}
        >

          <h1>Additional Services</h1>
          <h4>Can be added to a custom facial or purchased as a stand alone service.</h4>
          <p>Microdermabrasion - 30 minutes - $45</p>
          <p>Chemical Peel (glycolic, lactic, salicyclic, or an AHA/BHA combination) - 15-45 minutes - $40</p>
          <p>Microcurrent - 20 minutes - $45</p>
          <p>LED - 20 minutes - $30</p>
          <p>Dermaplaning - 30 minutes - $30</p>
          
        </div>

      </div>

    </div>
    
  </Layout>
)

export default AddOns

export const query = graphql`
  query {
    addOns: file(relativePath: {eq: "index/stones.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`