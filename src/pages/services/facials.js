import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'

// STYLES
// import '../../styles/pages/brownBody.css'

const Facials = ( {data} ) => (

  <Layout>

    {/* 08.29.20 / NICK SMEDIRA: DYNAMICALLY SET BODY CLASS */}
    <Helmet>
      <body class="brown" />
    </Helmet>
    
    <SEO title="Facials" />
    <h1>Facials page</h1>

    {/* 08.29.20: ADD 3 COLUMNS  */}
    <div className="container">
      <div className="columns">

        {/* CUSTOM FACIAL */}
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-square pt-0">
                <Img fluid={data.customFacial.childImageSharp.fluid} />
              </figure>
            </div>
            <div className="card-content has-background-black">
              <div className="content">
                <h2 className="brown has-text-centered" style={{textTransform: "uppercase"}}>Custom Facial</h2>
                <h3 className="has-text-white has-text-centered">60 min, $200</h3>
                <p className="has-text-white has-text-centered">
                  This nourishing treatment will make you shine. Discover a San Francisco spa where you’ll feel awakened, balanced, and rested within a warm, welcoming environment. Reconnect with yourself by experiencing our unique and soothing Skin Care. Find serenity and balance with one of our skilled practitioners. Book your appointment today.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* DUAL EXFOLIATION */}
        <div className="column">

        </div>

        {/* ANTI AGING FACIAL */}
        <div className="column">

        </div>

        {/* MASSAGE AND BODY WORK */}
        <div className="column">

        </div>

      </div>
    </div>

    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

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
  }
`