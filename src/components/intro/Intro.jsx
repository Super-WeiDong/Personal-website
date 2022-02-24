import "./intro.scss"
import { init } from 'ityped'
import { useEffect ,useRef} from "react"

export default function Intro() {
  const textRef = useRef();//select element
  useEffect(()=>{
    init(textRef.current, {
    backDelay:  1500,
    backSpeed: 60,
    showCursor: true.valueOf,
    strings: ['Engineer '] 
    })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm</h2>
          <h1>Weidong Wang</h1>
          <h3>Full-Stack <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
