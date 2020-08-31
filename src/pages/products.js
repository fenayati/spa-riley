import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Products = () => {

  const embed = function(d, s, id){
    var js
    var scriptTag = d.getElementById(id)
    if (scriptTag) {

      // 08.31.20 WHEN NAVIGATING AWAY FROM THE PAGE AND BACK AGAIN, THE SCRIPT ALREADY EXISTS IN THE HEAD, AND SO THE INSTAGRAM FEED IS NOT REEMBEDDED WHEN NAVIGATING BACK
      // console.log('element w/ id: ', id, 'already exists')
      // return
      scriptTag.parentNode.removeChild(scriptTag)

    } 
    js = d.createElement(s)
    js.id = id
    js.src = "https://embedsocial.com/embedscript/in.js"
    d.getElementsByTagName("head")[0].appendChild(js)
  }

  useEffect(() => {
    embed(document, "script", "EmbedSocialInstagramScript");
  }, [])

  return (    
    <Layout>
      <SEO title="Products" />

      <h1 className="has-text-white">Product page</h1>
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