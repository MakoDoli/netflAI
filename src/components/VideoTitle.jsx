import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="mt-20">
      <div>VideoTitle {title}</div>
      <div>{overview}</div>
    </div>
  );
}
