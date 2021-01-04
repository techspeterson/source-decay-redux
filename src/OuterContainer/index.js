import React from "react";
import TopBar from "../Topbar";

function OuterContainer(props) {
  return (
    <>
      <div id="container-outer">
        <TopBar />
        <div id="container-mid">
          <div className="container-box sidebar mobile-hide-flex">
            <div className="sidebar-inner">

              <div id="description">
                <hr />
              description here
              <hr />
              </div>


              <ul className="linkbox mobile-hide">
                <li><a href="/">index</a></li>
              </ul>

              <form action="/search" method="get" className="search">
                <input type="text" name="q"
                  // value="{SearchQuery}"
                  className="search-input" />
                <button type="submit" className="search-submit"><span className="fas fa-search" alt="Search"></span></button>
              </form>

              <div className="pagination">
                {/* {block:Pagination}
            {block:PreviousPage}
                <a href="{PreviousPage}">&#60;</a>
            {/block:PreviousPage}
            <span className="spacer">page {CurrentPage}</span>
            {block:NextPage}
                <a href="{NextPage}">&#62;</a>
            {/block:NextPage}
        {/block:Pagination} */}
              </div>

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