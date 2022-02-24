import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";


function App() {
  const[menuOpen,setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
