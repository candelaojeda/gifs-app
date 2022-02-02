import React from "react";
import "../components/Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <div>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </div>
    </a>
  );
}
