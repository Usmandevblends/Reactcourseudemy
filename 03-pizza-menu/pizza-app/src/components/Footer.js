import React from "react";
import Orderbtn from "./Orderbtn";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Orderbtn closeHour={openHour} />
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
