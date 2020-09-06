import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

// STYLES
import '../styles/pages/index.css'

// IMAGES
// import rocks from '../images/stones-167089.jpg'

const IndexPage = ( {data} ) => (
  <Layout>

    <SEO title="Home" />
    <Helmet>
      <body style="background-color: #52796F" />
    </Helmet>

    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="has-text-white" style={{fontSize: "72px"}}>Spa Riley: Putting Self Love First</h1>
        </div>
        
        {/* <div className="column" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
        <div className="column">

          {/* 08.29.20 / USE GATSBY-IMAGE TO IMPORT THE IMAGES */}
          {/* <Image /> */}
          {/* <img src={rocks} /> */}
          <Img fluid={data.tableHerbs.childImageSharp.fluid} />
        
        </div>
      </div>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

  </Layout>
)

export default IndexPage

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    tableHerbs: file(relativePath: {eq: "index/table-herbs.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`