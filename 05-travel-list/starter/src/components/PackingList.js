import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order </option>
          <option value="descritpion">Sort by description</option>
          <option value="Packed">Sort by Packed status</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
