import React, { useState } from "react";

function Advice() {
  const [count, setCount] = useState(0)

  function Decerement() {
    setCount(count - 1)
  }

  function Increment() {
    setCount(count + 1)
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={Decrement}>-</button>
        <button onClick={Increment}>+</button>
      </div>
    </React.Fragment>
  );
}

export default Advice;
