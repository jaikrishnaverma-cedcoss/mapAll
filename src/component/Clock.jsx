import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {
    let date = new Date(0)
    let [holder, setHolder] = useState(0);
    let [time, setTime] = useState()
    let [zone, setZone] = useState(["en-BD", "Asia/Dhaka"])
    const intervalRef = useRef(null)

   useEffect(() => {
    const id= setInterval(()=>{setTime(new Date().toLocaleString(zone[0], { hour12: false, timeZone: zone[1] }).split(',')[1])
    },1000)
    intervalRef.current = id;
    return () => clearInterval(id);
    }, [zone])

const selector=(e)=>{
    setZone(["en-" + e.target.value.split(",")[0], e.target.value.split(",")[1]]) 
}

    return (
        <div className="col navBody  flexAIC  w100 rtr" style={{minHeight:"100vh"}} >
            <h1  className="Clock" >{time}</h1>
            <select className="zone" id="" onChange={selector}>
                <option value="IN,Asia/Calcutta">Asia/Kolkata</option>
                <option value="BD,Asia/Dhaka">Asia/Dhaka</option>
                <option value="OM,Asia/Dubai">Asia/Dubai</option>
                <option value="HK,Asia/Hong_Kong">Asia/Hong_Kong</option>
                <option value="TR,Asia/Istanbul">Asia/Istanbul</option>
                <option value="NP,Asia/Kathmandu">Asia/Kathmandu</option>
                <option value="JP,Asia/Tokyo">Asia/Tokyo</option>
                <option value="CN,Asia/Shanghai">Asia/Shanghai</option>
                <option value="AU,Australia/West">Australia/West</option>
                <option value="BR,Brazil/East">Brazil/East</option>
                <option value="CA,Canada/Central">Canada/Central</option>
                <option value="EG,Egypt">Egypt</option>
                <option value="GB,Europe/London">Europe/London</option>
                <option value="MV,Indian/Maldives">Indian/Maldives</option>
                <option value="IR,Iran">Iran</option>
                <option value="PL,Poland">Poland</option>
                <option value="US,US/Alaska">US/Alaska</option>
                <option value="SG,Singapore">Singapore</option>
                <option value="US,US/Central">US/Central</option>
                <option value="JP,Japan">Japan</option>
            </select>
            <button onClick={() =>{ clearInterval(intervalRef.current)}}>stop</button>
        </div>
    )
}

export default Clock