import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkbox from "./Linkbox";

function Menu({ isDesktop }) {
  return (
    <>
      <div id="description">
        <hr />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quae facere suscipit, officia minus placeat provident porro vel doloribus a!
        <hr />
      </div>

      <Linkbox />

      <form action="/search" method="get" className="search">
        <input type="text" name="q"
          // value="{SearchQuery}"
          className="search-input" />
        <button type="submit" className="search-submit">
          {/* <span className="fas fa-search" alt="Search"></span> */}
          <FontAwesomeIcon icon="search" />
        </button>
      </form>

      {isDesktop &&
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
      }
    </>
  )
}

export default Menu;