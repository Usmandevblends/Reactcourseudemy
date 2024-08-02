import React, { useState } from "react";

function Advice() {
  const [count, setCount] = useState(0);

  function Decrement() {
    setCount(count - 1);
  }

  function Increment() {
    setCount(count + 1);
  }
  const date = new Date("8/2/2024");
  date.setDate(date.getDate() + count);
  return (
    <center>
      <div className="card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <button onClick={Decrement}>-</button>
          <span>{count}</span>
          <button onClick={Increment}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </center>
  );
}

export default Advice;
