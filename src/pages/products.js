import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Products = () => {

  const embed = function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}

  useEffect(() => {
    embed(document, "script", "EmbedSocialInstagramScript");
  })

  return (    
    <Layout>
      <SEO title="Products" />

      <h1>Product page</h1>
      <div className="container">

        {/* 08.30.20: EMBED INSTAGRAM FEED */}
        <div class='embedsocial-instagram' data-ref="71f47bcc8d931b7b1347e60a9528c2d3927f6464" style={{}}></div>
        {/* PUT THE SCRIPT INSIDE USEFFECT HOOK */}
        {/* <script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script> */}

      </div>
    </Layout>
  )
}

export default Products