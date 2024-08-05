import React from "react";
import "./style.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Items from "./components/Items";

const initialItems = [
  { id: 1, description: "Passports", qunantity: 2, Packed: false },
  { id: 2, description: "Socks", qunantity: 12, Packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems}/>
      <Stats />
      <Items />
    </div>
  );
}

export default App;
