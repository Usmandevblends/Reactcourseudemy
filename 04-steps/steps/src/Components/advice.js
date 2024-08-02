import React, { useState } from "react";

function Advice() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0)

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
          <button
            onClick={Decrement}
            style={{
              background: "transparent",
              border: " 1px solid #fff",
              color: "#fff",
              outline: "none",
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={Increment}
            style={{
              background: "transparent",
              border: " 1px solid #fff",
              color: "#fff",
              outline: "none",
            }}
          >
            +
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginTop: '10px'
          }}
        >
          <button
            onClick={Decrement}
            style={{
              background: "transparent",
              border: " 1px solid #fff",
              color: "#fff",
              outline: "none",
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={Increment}
            style={{
              background: "transparent",
              border: " 1px solid #fff",
              color: "#fff",
              outline: "none",
            }}
          >
            +
          </button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </center>
  );
}

export default Advice;
