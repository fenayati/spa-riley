import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// STYLES
import '../styles/index.css'

// IMAGES
import rocks from '../images/stones-167089.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="has-text-white" style={{fontSize: "72px"}}>Spa Riley: Putting Self Love First</h1>
        </div>
        
        {/* <div className="column" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
        <div className="column">
          {/* <Image /> */}
          <img src={rocks} />
        </div>
      </div>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

  </Layout>
)

export default IndexPage