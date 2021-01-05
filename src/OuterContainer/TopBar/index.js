import React, { useState } from "react";
import Menu from "../Menu";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div id="topbar">
      <hr className="hr-deco mobile-hide" />
      <div className="menu mobile-show">
        <i className="fas fa-bars menu-icon" onClick={toggleMenu}>test</i>
        <div id="menu-inner" className="container-box"
          style={{ display: menuOpen ? "block" : "none" }}>
          <Menu />
        </div>

      </div>
      <div className="corner-small corner-bottom-right"></div>
      <a href="/"><div id="topbar-inner">
        <h1>SOURCE DECAY</h1>
      </div></a>
      <div className="corner-small corner-bottom-left"></div>
      <hr className="hr-deco" />
    </div>
  )
}

export default Topbar;