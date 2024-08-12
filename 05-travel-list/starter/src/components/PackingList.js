import React from "react";
import Item from "./Item"; // Import the Item component

function PackingList({ initialItems, items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
