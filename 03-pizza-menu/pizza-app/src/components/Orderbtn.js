import React from "react";

function Orderbtn(props) {
  return (
    <div className="order">
      <p>
        we're open until until {props.closeHours}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Orderbtn;
