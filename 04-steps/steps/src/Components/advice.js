import React, { useState } from "react";

function Advice() {
  const [count, setCount] = useState(0);

  function Decrement() {
    setCount(count - 1);
  }

  function Increment() {
    setCount(count + 1);
  }

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          gap: "10px",
        }}
      >
        <button onClick={Decrement}>-</button>
        <span>{count}</span>
        <button onClick={Increment}>+</button>
      </div>
    </React.Fragment>
  );
}

export default Advice;
