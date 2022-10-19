
import React, { useState } from 'react'
import index from './index.module.scss'
import { useEffect,setState } from 'react'
import News from './News'
import Map from './Map/Map'
import { Routes,Route, Link } from 'react-router-dom'
import Panel from './Panel'
import Clock from './Clock'
import Newss from './Newss'
const Index = () => {
  let [state,setState]=useState({dataloaded:false,data:{},mode:"Headlines"})
  
  useEffect(()=>{
let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=de713b26887d4c68a61209262645aa51';
fetch(url)
.then((res)=>res.json())
.then((json)=>{
  setState({...state,data:json,dataloaded:true})
})
  },[])
  console.log(state.data)
  if(!state.dataloaded)
  {
    return <div className="navBody row flexJCC flexAIC" style={{minHeight:"80vh",background:"transparent"}} >
    <img  src="Fidget-spinner.gif" style={{width:"100px"}} alt="" /></div>
  }
  return (
   <>
   <nav className="nav">
    <div className="row flexAIC darkdiv navup"><i class="fa fa-superpowers" aria-hidden="true"></i><h2>NEWS</h2></div>
    <div className="darkdiv navlink flexAIC now">
      <Link to="/"><span>Headlines</span></Link>
      <Link to="/news"><span>News</span></Link>
      <Link to="/map"><span>Google Map</span></Link>
      <Link to="/panel"><span>Controll Panel</span></Link>
      <Link to="/digitalClock"><span>Digital Clock</span></Link>
      <span className='searchSpan row flexAIC'><input type="text" />&nbsp;<i class="fa fa-search" aria-hidden="true"></i></span>
      <select className='btn-trans bar' id="">
      <option>About</option>
      <option>Our Network</option>
      <option>News Room</option>
      <option>Worlwide Foundation</option>
      </select>
    </div>
    <div className="p3 btn-info row" style={{borderRadius:"none"}}>{state.mode} &nbsp;<i class="fa fa-bars" aria-hidden="true"></i></div>
    </nav>


   <Routes>
    <Route path="/" index element={ <News data={state.data}/>} />
    <Route path="/news" element={ <Newss data={state.data}/>} />
    <Route path="/map" element={ <Map />} />
    <Route path="/panel" element={ <Panel />} />
    <Route path="/digitalClock" element={ <Clock/>} />
   </Routes>
   </>
  )
}

export default Index