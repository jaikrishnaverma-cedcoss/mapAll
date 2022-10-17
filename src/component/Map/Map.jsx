import React, { useState } from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'
const Map = () => {
    const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyB0Ci-UdHgrE-cjxZeXZpq9LOeZOB4PcBM"})
    const [state,setState]=useState({lat:26.67775,long:83.3556})
    const integerCheck = (num) => {
        if(isNaN(num))
        return false
        const isInt = (n) => Number(n) === n && n % 1 === 0
        const isFloat = (n) => Number(n) === n && n % 1 !== 0
        return (isInt(num) || !isFloat(num))        
}
    const submitted=(e)=>{
        e.preventDefault();
        console.log(state) 
    if(integerCheck(e.target.lat.value) && integerCheck(e.target.long.value)){

     state.lat=Number(e.target.lat.value)
     state.long=Number(e.target.long.value)

    //  e.target.reset();
    }
    else{
        return alert("Please Enter Valid Details!")
    }
    setState({...state})
    }
    if(!isLoaded)
    return <h2>Is Loading...</h2>

  return (

    <div className="navBody colflexAIC  flexSB" >
        <form onSubmit={submitted}>
            <input type="text" name="long" placeholder='Longitude'/>
            <input type="text" name="lat" placeholder='Latitude'/>
            <button type='submit'>Locate</button>
        </form>
    <GoogleMap zoom={10} center={{lat:state.lat,lng:state.long}} mapContainerClassName="map"/>
     </div>
  )
}

export default Map