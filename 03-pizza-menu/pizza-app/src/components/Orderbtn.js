import React from "react";

function Orderbtn(props) {
  const handleOnClick = () => {
    const alertBox = document.getElementById("alert-box");
    alertBox.style.display = "block";
    alertBox.innerHTML = "Order Now! Call us at +9203204168226";
  };

  return (
    <div className="order">
      <p>
        we're open until until {props.closeHours}:00. Come visit us or order
        online
      </p>
      <button className="btn" onClick={handleOnClick}>
        Order
      </button>
      <div id="alert-box" className="alert-box">
      </div>
    </div>
  );
}

export default Orderbtn;