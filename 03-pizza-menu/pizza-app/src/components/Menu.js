import React from "react";
import Pizza from "./Pizza";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tamoto/ mozarella, spinach, and ricotta cheese"
        photoName="Pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={13}
      />
    </main>
  );
}

export default Menu;
