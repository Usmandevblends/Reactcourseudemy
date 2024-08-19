import React from "react";

export default function Reset({ onReset }) {
  return (
    <div>
        <button className="btn" onClick={onReset}>Reset</button>
    </div>
  )
}
