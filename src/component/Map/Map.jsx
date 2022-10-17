import React from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'
const Map = () => {
    const {}=useLoadScript({googleMapsApiKey:"AIzaSyB0Ci-UdHgrE-cjxZeXZpq9LOeZOB4PcBM"})
  return (
   
    <div className="navBody flexSB" >
        <h1>Map</h1>
    </div>
  )
}

export default Map