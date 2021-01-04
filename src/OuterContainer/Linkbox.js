import React from "react";

const links = [
  { name: "index", path: "/" },
  { name: "queries", path: "/ask" },
  { name: "about" },
  { name: "faq" },
  { name: "rules" },
  { name: "lore" },
  { name: "mods" },
  { name: "mechanics" },
  { name: "maps" },
  { name: "roster" },
  { name: "submit" },
  { name: "archive" }
]

function Linkbox() {
  return (
    <ul className="linkbox">
      {/* <li><a href="/">index</a></li> */}
      {links.map(link => {
        return <li><a href={link.path || `/${link.name}`}>{link.name}</a></li>
      })}
    </ul>
  )
}

export default Linkbox;