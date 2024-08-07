// App.js
import React from "react";
import "./style.css";
import Logo from "./components/LogoApp";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: true },
  { id: 2, description: "Socks", quantity: 4, packed: true},
  { id: 3, description: "charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      {PackingList && <PackingList initialItems={initialItems} />}
      <Stats />
    </div>
  );
}

export default App;
