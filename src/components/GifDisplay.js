
import React from "react";

function GifDisplay ({gif}) {
  if (gif === null) {
    return <h1>Click for a Random Gif</h1>
  }

return (
  <div className="gif-display">
    <img src={gif.data.images.original.url} alt="" />;
  </div>
);
};
export default GifDisplay;