import React from 'react'

const News = (props) => {
  return (
    <div className="navBody flexSB" >
    {
     props.data.articles.map(x=>{
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
  )
}

export default News