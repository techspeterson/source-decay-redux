import React from "react";

function TagBlock({ tags }) {
  return (
    <div class="permalinks permalinks-tags">
      <div class="tags footer-item">
        <span>TAGGED:
          {tags.map(tag => {
          return <span className="footer-inner">#<a href={`/tagged/${tag}`}>{tag}</a></span>
        })}
        </span>
      </div>
    </div>
  )
}

export default TagBlock;