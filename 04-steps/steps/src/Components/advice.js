import React, { useState } from "react";

function Advice() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  return (
    <div>
      <p style={{ color: "#fff" }}>{advice}</p>
      <button onClick={fetchAdvice} className="btn">
        Get New Advice
      </button>
    </div>
  );
}

export default Advice;
