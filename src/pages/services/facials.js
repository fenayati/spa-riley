import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

// STYLES
// import '../../styles/pages/brownBody.css'

const Facials = () => (

  <Layout>

    {/* 08.29.20 / NICK SMEDIRA: DYNAMICALLY SET BODY CLASS */}
    <Helmet>
      <body class="brown" />
    </Helmet>
    
    <SEO title="Facials" />
    <h1>Facials page</h1>
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