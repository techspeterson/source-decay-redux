import React from "react";
import DateBlock from "./DateBlock";
import TextPost from "./TextPost";



function PostOuter({ type, ...props }) {
  return (
    <div className="post">
      {type === "text" && <TextPost {...props} />}
      <DateBlock date={props.date} />
    </div>
  )
}

export default PostOuter;