import "./topbar.scss"
import{Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setmenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">Weidong.</a>
              <div className="itemContainer">
                  <Person className="icon"/>
                  <span>+1 781-535-9478</span>
              </div>
              <div className="itemContainer">
                  <Mail className="icon"/>
                  <span>weidongwang@brandeis.edu</span>
              </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
               <span className="line1"></span>
               <span className="line2"></span>
               <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
