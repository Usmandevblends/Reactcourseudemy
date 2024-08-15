import React from "react";
import AccordingItem from "./AccordingItem";

function According({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordingItem title={el.title} text={el.text} num={i} key={el.text} />
      ))}
    </div>
  );
}

export default According;
