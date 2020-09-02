import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {

  
  var scriptText = `function initMap () {

    console.log('initMap() has been called')

    // the location of Uluru
    var coordinates = {
      lat: 41.4299,
      lng: -81.3911
    }

    // the map, centered at uluru
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: coordinates,
        gestureHandling: 'none',
        zoomControl: false
      }
    )

    // the marker, positioned at uluru
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    })

  }`

  const idInit = "initMap"
  const idLib = "googleMaps"
  const idRedraw = "redraw"

  const appendMapFunction = () => {
    const initFunction = document.createElement('script')
    initFunction.id = idInit
    initFunction.text = scriptText
    document.body.appendChild(initFunction)
  }

  const importGoogleMaps = () => {
    const googleMaps = document.createElement('script')
    googleMaps.id = idLib
    googleMaps.defer = true
    googleMaps.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`
    document.body.appendChild(googleMaps)
  }

  const redrawMap = () => {
    const redrawScript = document.getElementById(idRedraw)
    if(redrawScript){
      redrawScript.parentNode.removeChild(redrawScript)
    }
    const drawMap = document.createElement('script')
    drawMap.text = "initMap()"
    drawMap.id = idRedraw
    document.body.appendChild(drawMap)
  }

  useEffect( () => {

    const mapsScript = document.getElementById(idLib)
    
    // provide map init function if not already inserted
    if(!document.getElementById(idInit)){
      appendMapFunction()
    }

    if(mapsScript){
      
      // google maps already imported, so if we get here then the component has rerendered and the callback built into the library import will not draw the map so redraw it
      redrawMap()

    } else {

      // google maps has not already been imported. import google maps
      importGoogleMaps()

    }

  })
  
  return (

    <Layout>
      <SEO title="Contact" />
      <h1 className="has-text-white">Contact page</h1>
      <h2 className="has-text-white">Location</h2>

      {/* 09.01.20: MAP DIV */}
      <div id="map" style={{height: 400, width: "100%"}}></div>

    </Layout>

  )

}

export default Contact