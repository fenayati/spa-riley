import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Products = () => {

  // this function was included with the EmbedSocial widget, but i wasn't able to just paste it into the container div below
  const embed = function(d, s, id){
    var js
    var scriptTag = d.getElementById(id)
    if (scriptTag) {

      // 08.31.20 WHEN NAVIGATING AWAY FROM THE PAGE AND BACK AGAIN, THE SCRIPT ALREADY EXISTS IN THE HEAD, AND SO THE INSTAGRAM FEED IS NOT REEMBEDDED WHEN NAVIGATING BACK
      // the original code used the disabled return below, but that prevents the feed from reembedding. so remove the script
      // return
      scriptTag.parentNode.removeChild(scriptTag)

    } 

    // append/re-append the script to the head
    js = d.createElement(s)
    js.id = id
    js.src = "https://embedsocial.com/embedscript/in.js"
    d.getElementsByTagName("head")[0].appendChild(js)

  }

  useEffect(() => {

    // the script included in the widget was an immediatley invoked function and this was the invocation, if that is the correct word
    embed(document, "script", "EmbedSocialInstagramScript");
    
  }, [])

  return (    
    <Layout>
      <SEO title="Products" />

      <h1 className="has-text-white">Product page</h1>
      <div className="container">

        {/* 08.30.20: EMBED INSTAGRAM FEED */}
        <div class='embedsocial-instagram' data-ref={process.env.EMBED_SOCIAL_DATA_REF} style={{}}></div>
        {/* PUT THE SCRIPT INSIDE USEFFECT HOOK */}
        {/* <script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script> */}

      </div>
    </Layout>
  )
}

export default Products