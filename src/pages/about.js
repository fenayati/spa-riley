import React from "react"
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const About = ({data}) => (

  <Layout>
    <SEO title="About Me" />
    <Helmet>
      <body style="background: #CAD2C5"></body>
    </Helmet>

    <div className="columns" style={{marginBottom: "2em"}}>
      <div className="column" style={{padding: 0}}>
        {/* <figure className="image"> */}
          <Img fluid={data.portrait.childImageSharp.fluid} style={{height: "100%"}} />
        {/* </figure> */}
      </div>
      <div className="column has-background-dark has-text-centered has-text-white" style={{padding: 0}}>
        <div style={{padding: "2em"}}>
          <h1>Riley White</h1>
          <p>My name is Riley and I am the proud owner of Spa Riley. I grew up in Chagrin Falls and have spent time in other places but knew this would be the perfect setting for my business. Growing up I experienced acne as a teen and often felt like going to an esthician was embarassing. My goal is to provide a safe sanctuary where clients feel comfortable and at my space and trust me to help with thier skin journey. I believe our skins health is impacted by outside and inside factors so I like to get to know my clients and come up with a homecare routine that works. Whether you are struggling with acne, loss of elasticity, hyperpigmentation or any other skin concerns, I am here to help! In my off time I am usually reading about new skincare or makeup breakthroughs and am a firm believer in cruelty free, vegan and organic products. I look at taking the time to come to the spa as carving out a little time for yourself, which is very important. Book your first service and lets get started to making you feel as fabulous as you really are!</p>
        </div>
      </div>
    </div>
  
  </Layout>

)

export default About

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    portrait: file(relativePath: {eq: "portrait.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`