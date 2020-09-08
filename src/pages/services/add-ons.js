import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../../components/image"
import SEO from "../../components/seo"

const AddOns = () => (

  <Layout>
    <SEO title="Products" />

    <div className="has-text-centered add-ons" style={{marginBottom: "2em", color: "#255957"}}>
      <h1>Additional Services</h1>
      <h4>Can be added to a custom facial or purchased as a stand alone service.</h4>
      <p>Microdermabrasion - 30 minutes - $45</p>
      <p>Chemical Peel (glycolic, lactic, salicyclic, or an AHA/BHA combination) - 15-45 minutes - $40</p>
      <p>Microcurrent - 20 minutes - $45</p>
      <p>LED - 20 minutes - $30</p>
      <p>Dermaplaning - 30 minutes - $30</p>
    </div>
    
  </Layout>
)

export default AddOns