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

  useEffect( () => {

    const mapsScript = document.getElementById(idLib)
    const initScript = document.getElementById(idInit)
    const mapContainer = document.getElementById("map-container")

    // init map
    if(!initScript){
      const initFunction = document.createElement('script')
      initFunction.id = idInit
      initFunction.text = scriptText
      // document.body.appendChild(initFunction)
      mapContainer.appendChild(initFunction)
    }

    // import google maps
    if(mapsScript){

      //this chunk just draws the map again.
      console.log('map about to redraw')
      
      // mapsScript.parentNode.removeChild(mapsScript)
      const drawMap = document.createElement('script')
      drawMap.text = "initMap()"
      // document.body.appendChild(drawMap)
      mapContainer.appendChild(drawMap)
    } else {
      const googleMaps = document.createElement('script')
      googleMaps.id = idLib
      googleMaps.defer = true
      googleMaps.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`
      // document.body.appendChild(googleMaps)
      mapContainer.appendChild(googleMaps)
    }



  })
  
  return (

    <Layout>
      <SEO title="Contact" />
      <h1 className="has-text-white">Contact page</h1>
      <h2 className="has-text-white">Location</h2>

      <div id="map-container">
        {/* 09.01.20: MAP DIV */}
        <div id="map" style={{height: 400, width: "100%"}}></div>
      </div>
      
    </Layout>

  )

}

export default Contact