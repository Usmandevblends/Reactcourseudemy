import React from "react";
import AccordingItem from "./AccordingItem";

function According({ data }) {
  return (
    <div className="according">
      {data.map((el, i) => (
        <AccordingItem title={el.title} text={el.text} num={i}/>
      ))}
    </div>
  );
}

export default According;
