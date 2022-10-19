import React, { useEffect, useState } from 'react'
const Newss = (props) => {
    const [state,setState]=useState({dataloaded:false,data:{},mode:"Headlines"})
    useEffect(()=>{
        let url=' https://newsapi.org/v2/everything?q=bitcoin&apiKey=de713b26887d4c68a61209262645aa51';
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
          setState({...state,data:json,dataloaded:true})
        })
          },[])
          if(!state.dataloaded)
          {
            return <div className="navBody row flexJCC flexAIC" style={{minHeight:"80vh",background:"transparent"}} >
                <img  src="Fidget-spinner.gif" style={{width:"100px"}} alt="" /></div>
          }
          return (
            <div className="navBody flexSB" >
            {
             state.data.articles.map(x=>{
                return    <div className="row w80 lightdiv brd2 p1 m2 flexAIC newsbox">
                <img src={(x.urlToImage==undefined)?"logo192.png":x.urlToImage} className="image" style={{width:"30%"}} alt="" />
                <div className="col flexSB p3 details" style={{width:"70%",minHeight:"180px"}}>
                <p style={{color:"grey"}}>{x.publishedAt}</p>
                <h3 className='lightdiv'>{x.title}</h3>
                <p style={{color:"grey"}}>{x.description}</p>
                <h5>Source: {x.source.name}</h5>
                <div className="row flexEnd"><a className="lightdiv linker" href={x.url}>READ MORE...<i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
        
                </div>
              </div>
              })
}
</div>
);
}
export default Newss