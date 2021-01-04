import React from "react";
import Linkbox from "../Linkbox";

const toggleMenu = () => { }

function Topbar() {
  return (
    <div id="topbar">
      <hr className="hr-deco mobile-hide" />
      <div className="menu mobile-show">
        <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>
        <div id="menu-inner" className="container-box">
          <div id="description">
            <hr />
            description here
          </div>


          <Linkbox />
          <hr />
          <form action="/search" method="get" className="search">
            <input type="text" name="q"
              // value="{SearchQuery}"
              className="search-input" />
            <button type="submit" className="search-submit"><span className="fas fa-search" alt="Search"></span></button>
          </form>
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