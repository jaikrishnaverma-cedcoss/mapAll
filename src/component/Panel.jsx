import React, { useState } from 'react'
import style from './index.module.scss'
const Panel = () => {
  let [css, setCss] = useState({magnifier:"",  link: { "fontSize": 20,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif"},h1: { "fontSize": 20,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" }, h2: {"fontSize": 18 ,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" }, h3: {"fontSize": 15 ,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" }, p: {"fontSize": 13,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" }, all: {"fontSize": 30,"lineHeight":1.2,"letterSpacing":1 ,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" },main:{"zoom":1,"lineHeight":1.2,"letterSpacing":1,"textAlign":"left","color":"","backgroundColor":"","filter": "contrast(1)","fontFamily":"sans-serif" } })
  let [mode,setMode]=useState("all") 

  const Styler = (val,tag=mode) => {
    if(tag=="all")
    {
        css['h1']={...css['h1'],...val}
        css['h2']={...css['h2'],...val}
        css['h3']={...css['h3'],...val}
        css['p']={...css['p'],...val}
        css['all']={...css['all'],...val}
        css['link']={...css['link'],...val}
    }
      else{
        css[tag]={...css[tag],...val}
      }
      console.log("mode",mode,css)
       setCss({...css})
  }
  return (
    <div className="row navBody flexSB   w100 " >
      <div className={`w50 m1 bgWhite`} style={{...css.main}}>
        <div className="card">
          <h1 style={{...css.h1}} className={`${css.magnifier}`}>Hello Brother</h1>
          <h2 style={{...css.h2}} className={`${css.magnifier}`}>Heading2</h2>
          <h3 style={{...css.h3}} className={`${css.magnifier}`}>Heading3</h3>
          <p style={{...css.p}} className={`${css.magnifier}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas alias fugiat facilis, harum similique necessitatibus ducimus suscipit odio sunt?</p>
          <button>Button</button>
          <a href="https://www.youtube.com/" style={{...css.link}} className={`${css.magnifier}`}>YouTube link</a>
        </div>
        <div className="card">
          <h1 style={{...css.h1}} className={`${css.magnifier}`}>Hello Brother</h1>
          <h2 style={{...css.h2}} className={`${css.magnifier}`}>Heading2</h2>
          <h3 style={{...css.h3}} className={`${css.magnifier}`}>Heading3</h3>
          <p style={{...css.p}} className={`${css.magnifier}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas alias fugiat facilis, harum similique necessitatibus ducimus suscipit odio sunt?</p>
          <button>Button</button>
          <a href="https://www.youtube.com/" style={{...css.link}} className={`${css.magnifier}`}>YouTube link</a>
        </div>
        <div className="card">
          <h1 style={{...css.h1}} className={`${css.magnifier}`}>Hello Brother</h1>
          <h2 style={{...css.h2}} className={`${css.magnifier}`}>Heading2</h2>
          <h3 style={{...css.h3}} className={`${css.magnifier}`}>Heading3</h3>
          <p style={{...css.p}} className={`${css.magnifier}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas alias fugiat facilis, harum similique necessitatibus ducimus suscipit odio sunt?</p>
          <button>Button</button>
          <a href="https://www.youtube.com/" style={{...css.link}} className={`${css.magnifier}`}>YouTube link</a>
        </div>

        <div className="card">
          <h1 style={{...css.h1}} className={`${css.magnifier}`}>Hello Brother</h1>
          <h2 style={{...css.h2}} className={`${css.magnifier}`}>Heading2</h2>
          <h3 style={{...css.h3}} className={`${css.magnifier}`}>Heading3</h3>
          <p style={{...css.p}} className={`${css.magnifier}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quas alias fugiat facilis, harum similique necessitatibus ducimus suscipit odio sunt?</p>
          <button>Button</button>
          <a href="https://www.youtube.com/" style={{...css.link}} className={`${css.magnifier}`}>YouTube link</a>
        </div>


      </div>



      <div className="row m1 wrap brd5 bgWhite cbox p1" style={{ marginTop: "3%",maxHeight:"900px",width:"39%"}}>

        <div className={`col lbggrey m1 p1 flexAIC w31 brd5`} onClick={()=>setMode('h1')}>
          <span>H1</span>
        </div>

        <div className="w31 col lbggrey m1 p1 flexAIC brd5" onClick={()=>setMode('h2')}>
          <span>H2</span>
        </div>
        <div className="w31 col lbggrey m1 p1 flexAIC brd5" onClick={()=>setMode('h3')}>
          <span>H3</span>
        </div>
        <div className="w31 col  lbggrey m1 p1 flexAIC brd5" onClick={()=>setMode('p')}>
          <span>P</span>
        </div>
        <div className="w31 col lbggrey m1 p1 flexAIC brd5" onClick={()=>setMode('all')}>
          <span>All</span>
        </div>

        <div className={`col lbggrey m1 p1 flexAIC ${style.w57} brd5 `} >
          <div className="row"><i className="mt fa fa-arrows-alt" aria-hidden="true"></i>&nbsp;<span>Content Scaling</span></div>
          <div className="row flexAIC ">
            <button className="bin" onClick={() => Styler({ "zoom":css.main.zoom-.1},"main")}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
            <span className='m5'>{css.main.zoom.toFixed(2)}</span>
            <button className="bin" onClick={() => Styler({ "zoom":css.main.zoom+.1},"main")}><i class="fa fa-angle-up" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className={`col lbggrey m1 p1 flexAIC ${style.w38} brd5`} onClick={() => Styler({ "fontFamily": "'Times New Roman', serif","fontSize":20})}>
          <i className="mt fa fa-font" aria-hidden="true"></i>
          <span>Readable Font</span>
        </div>

        <div className="w31 col lbggrey m1 p1 flexAIC brd5" onClick={() => Styler({ backgroundColor: "yellow",color: "black"},"h1")}>
          <i className="mt fa fa-header" aria-hidden="true"></i>
          <span>Heighlight Title </span>
        </div>
        <div className="w31 col lbggrey m1 p1 flexAIC brd5" onClick={() => Styler({ backgroundColor: "yellow",color: "black"},"link")} >
          <i className="mt fa fa-link" aria-hidden="true"></i>
          <span>Heighlight Links</span>
        </div>
        <div className="w31 col  lbggrey m1 p1 flexAIC brd5"  onClick={() =>setCss({...css,magnifier:"cardhov"}) } >
          <i className="mt fa fa-search-plus" aria-hidden="true"></i>
          Text Magnifier
        </div>

        <div className={`col lbggrey m1 p1 flexAIC ${style.w57} brd5`}>
          <div className="row"><i class="fa fa-text-width" aria-hidden="true"></i>&nbsp;<span>Adjust Font Sizing</span></div>
          <div className="row flexAIC ">
            <button className="bin"  onClick={() => Styler({"fontSize": css[mode]["fontSize"]- 1})}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
            <span className='m5'>{css[mode].fontSize.toFixed(0)}</span>
            <button className="bin"  onClick={() => Styler({"fontSize": css[mode]["fontSize"]+1})}><i class="fa fa-angle-up" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className={`col lbggrey m1 p1 flexAIC ${style.w38} brd5`}  onClick={() => Styler({ "textAlign":"center"})}>
          <div className="row"><i class="fa fa-align-center" aria-hidden="true"></i></div>
          <span>Align Center</span>
        </div>

        <div className={`col lbggrey m1 p1 flexAIC ${style.w57} brd5`}>
          <div className="row"><i class="fa fa-text-height" aria-hidden="true"></i>&nbsp;<span>Adjust Line Heights</span></div>
          <div className="row flexAIC ">
            <button className="bin" onClick={() => Styler({ "lineHeight":css[mode].lineHeight-.1})}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
            <span className='m5'>{css.main.lineHeight.toFixed(2)}</span>
            <button className="bin" onClick={() => Styler({ "lineHeight":css[mode].lineHeight+.1})}><i class="fa fa-angle-up" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className={`col lbggrey m1 p1 flexAIC ${style.w38} brd5`}  onClick={() => Styler({ "textAlign":"left"})}>
          <div className="row"><i class="fa fa-align-left" aria-hidden="true"></i></div>
          <span>Align Left</span>
        </div>

        <div className={`col lbggrey m1 p1 flexAIC ${style.w57} brd5`}>
          <div className="row"><i class="fa fa-arrows-h" aria-hidden="true"></i>&nbsp;<span>Adjust Letter Spacing</span></div>
          <div className="row flexAIC ">
            <button className="bin" onClick={() => Styler({ "letterSpacing":css[mode].letterSpacing+.1})}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
            <span className='m5'>{css[mode].letterSpacing.toFixed(2)}</span>
            <button className="bin" onClick={() => Styler({ "letterSpacing":css[mode].letterSpacing+.1})}><i class="fa fa-angle-up" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className={`col lbggrey m1 p1 flexAIC ${style.w38} brd5`} onClick={() => Styler({ "textAlign":"right"})}>
          <i class="fa fa-align-right" aria-hidden="true"></i>
          <span>Align Right</span>
        </div>

        <div className={`col lbggrey m1 p1 flexAIC brd5`} style={{width:"96%"}}>
          <p>Adjust Text Colors</p>
          <div className="row flexAIC">
            <div className="coldiv" style={{backgroundColor:"#006fb4"}} onClick={() => Styler({color:"#006fb4"})}></div>
            <div className="coldiv" style={{backgroundColor:"#89399c"}} onClick={() => Styler({color:"#89399c"})}></div>
            <div className="coldiv" style={{backgroundColor:"#e00034"}} onClick={() => Styler({color:"#e00034"})}></div>
            <div className="coldiv" style={{backgroundColor:"#e26721"}} onClick={() => Styler({color:"#e26721"})}></div>
            <div className="coldiv" style={{backgroundColor:"#009f9f"}} onClick={() => Styler({color:"#009f9f"})}></div>
            <div className="coldiv" style={{backgroundColor:"#2b8230"}} onClick={() => Styler({color:"#2b8230"})}></div>
            <div className="coldiv" style={{backgroundColor:"white"}} onClick={() => Styler({color:"white"})}></div>
            <div className="coldiv" style={{backgroundColor:"black"}} onClick={() => Styler({color:"black"})}></div>
          </div>
          <p>Cancel</p>
        </div>

        <div className={`col lbggrey m1 p1 flexAIC brd5`} style={{width:"96%"}}>
          <p>Adjust Background Colors</p>
          <div className="row flexAIC">
          <div className="coldiv" style={{backgroundColor:"#006fb4"}} onClick={() => Styler({backgroundColor:"#006fb4"})}></div>
            <div className="coldiv" style={{backgroundColor:"#89399c"}} onClick={() => Styler({backgroundColor:"#89399c"})}></div>
            <div className="coldiv" style={{backgroundColor:"#e00034"}} onClick={() => Styler({backgroundColor:"#e00034"})}></div>
            <div className="coldiv" style={{backgroundColor:"#e26721"}} onClick={() => Styler({backgroundColor:"#e26721"})}></div>
            <div className="coldiv" style={{backgroundColor:"#009f9f"}} onClick={() => Styler({backgroundColor:"#009f9f"})}></div>
            <div className="coldiv" style={{backgroundColor:"#2b8230"}} onClick={() => Styler({backgroundColor:"#2b8230"})}></div>
            <div className="coldiv" style={{backgroundColor:"white"}} onClick={() => Styler({backgroundColor:"white"})}></div>
            <div className="coldiv" style={{backgroundColor:"black"}} onClick={() => Styler({backgroundColor:"black"})}></div>
          </div>
          <p>Cancel</p>
        </div>


        <div className={`col lbggrey m1 p1 flexAIC brd5`} style={{width:"96%"}}>
          <p>Adjust Title Colors</p>
          <div className="row flexAIC">
          <div className="coldiv" style={{backgroundColor:"#006fb4"}} onClick={() => Styler({backgroundColor:"#006fb4"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"#89399c"}} onClick={() => Styler({backgroundColor:"#89399c"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"#e00034"}} onClick={() => Styler({backgroundColor:"#e00034"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"#e26721"}} onClick={() => Styler({backgroundColor:"#e26721"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"#009f9f"}} onClick={() => Styler({backgroundColor:"#009f9f"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"#2b8230"}} onClick={() => Styler({backgroundColor:"#2b8230"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"white"}} onClick={() => Styler({backgroundColor:"white"},"h1")}></div>
            <div className="coldiv" style={{backgroundColor:"black"}} onClick={() => Styler({backgroundColor:"black"},"h1")}></div>
          </div>
          <p>Cancel</p>
        </div>

       


        <div className={`col lbggrey m1 p1 flexAIC w31 brd5`}    onClick={() => Styler({filter: "contrast(50%)"})}>
        <i class="m1 fa fa-moon-o" aria-hidden="true"></i>
          <span>Dark Contrast</span>
        </div>

        <div className="w31 col lbggrey m1 p1 flexAIC brd5"   onClick={() => Styler({filter: "contrast(1.3)"})}>
        <i class="m1 fa fa-sun-o" aria-hidden="true"></i>
          <span>Light Contrast</span>
        </div>
        <div className="w31 col lbggrey m1 p1 flexAIC brd5"  onClick={() => Styler({filter: "contrast(1.8)"})}>
        <i class="m1 fa fa-adjust" aria-hidden="true"></i>
          <span>High Contrast</span>
        </div>
      </div>

    </div>
  )
}

export default Panel