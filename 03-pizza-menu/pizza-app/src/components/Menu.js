import React from "react";
import Pizza from "./Pizza";

function Menu({ pizzaData }) {
  const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/* <Pizza
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
      /> */}
    </main>
  );
}

export default Menu;
