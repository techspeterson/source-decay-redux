import React from "react";
import DateBlock from "./DateBlock";
import TagBlock from "./TagBlock";
import TextPost from "./TextPost";
import "./Posts.css";


function PostOuter({ type, date, tags, ...props }) {
  return (
    <div className="post">
      {type === "text" && <TextPost {...props} />}
      {date ? <DateBlock date={date} /> : null}
      {tags ? <TagBlock tags={tags} /> : null}
    </div>
  )
}

export default PostOuter;