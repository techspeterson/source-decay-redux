import React from "react";

function PostOuter(props) {
  return (
    <div className="post">
      {props.children}
    </div>
  )
}

export default PostOuter;