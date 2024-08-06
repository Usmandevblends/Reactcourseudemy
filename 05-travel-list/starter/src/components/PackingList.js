import React from "react";
import Item from "./Item"; // Import the Item component

function PackingList({ initialItems }) {
  return (
    <>
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item}/> // Always provide a unique key when rendering lists
        ))}
      </ul>
    </>
  );
}

export default PackingList;
