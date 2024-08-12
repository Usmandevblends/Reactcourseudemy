// App.js
import React, { useState } from "react";

import "./style.css";
import Logo from "./components/LogoApp";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: true },
  { id: 2, description: "Socks", quantity: 4, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleAddItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList initialItems={initialItems} items={items} />
      <Stats />
    </div>
  );
}

export default App;
