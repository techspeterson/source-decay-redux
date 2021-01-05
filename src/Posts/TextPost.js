import React from "react";

function TextPost(props) {
  return (
    <>
      {props.title ?
        <h2>{props.title}</h2>
        : null}
      {props.body}
    </>
  )
}

export default TextPost;