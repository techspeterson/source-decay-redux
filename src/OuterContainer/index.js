import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";

function OuterContainer(props) {
  return (
    <>
      <div id="container-outer">
        <TopBar />
        <div id="container-mid">
          <div className="container-box sidebar mobile-hide-flex">
            <div className="sidebar-inner">
              <Menu isDesktop />
            </div>
          </div>

          <div id="container-inner">


            <div className="corners mobile-hide-flex">
              <div className="corner-large corner-top-left"></div>
              <div className="corner-large corner-bottom-left"></div>
            </div>

            <div className="corners mobile-show">
              <div className="corner-small corner-top-left"></div>
              <div className="corner-small corner-bottom-left"></div>
            </div>

            <div id="container-space"></div>

            <div className="corners mobile-hide-flex">
              <div className="corner-large corner-top-right"></div>
              <div className="corner-large corner-bottom-right"></div>
            </div>

            <div className="corners mobile-show">
              <div className="corner-small corner-top-right"></div>
              <div className="corner-small corner-bottom-right"></div>
            </div>

          </div>

          <div className="container-box sidebar mobile-hide-flex">
            <div className="sidebar-img"></div>
          </div>
        </div>
        <div class="container-box">
          <div class="pagination mobile-show">
            {/* {block:Pagination}
            {block:PreviousPage}
                <a href="{PreviousPage}">&#60;</a>
            {/block:PreviousPage}
            <span class="spacer">page {CurrentPage}</span>
            {block:NextPage}
                <a href="{NextPage}">&#62;</a>
            {/block:NextPage}
        {/block:Pagination} */}
        test
            </div>
        </div>
      </div>
      <div id="container">
        {props.children}
      </div>
    </>
  )
}

export default OuterContainer;