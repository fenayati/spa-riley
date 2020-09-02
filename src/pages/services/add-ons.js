import React from "react"
import { Helmet } from 'react-helmet'
// import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../../components/image"
import SEO from "../../components/seo"

const AddOns = () => (

  <Layout>
    <SEO title="Products" />
    <Helmet>
      <body style="background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('https://res.cloudinary.com/nsmedira/image/upload/f_auto,q_auto/v1599046998/background_rnquix.jpg') no-repeat center center fixed ;" />
    </Helmet>

    <div className="has-text-centered has-text-white" style={{marginBottom: "2em"}}>
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