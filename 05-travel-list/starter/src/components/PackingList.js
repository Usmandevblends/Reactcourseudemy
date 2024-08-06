import React, { useState } from "react";
import Item from "./Item"; // Import the Item component

function PackingList({ initialItems }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item}/> 
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
