import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen =  hour >= openHour && hour <= closeHour;
  console.log(isOpen)
//   if (hour >= openHour && hour <= closeHour) {
//     alert("we' re currently open! ");
//   } else {
//     alert("Sorry we're colsed");
//   }

  return (
    <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
  //   return React.createElement("footer", null, "We' re currently open!");
}

export default Footer;
