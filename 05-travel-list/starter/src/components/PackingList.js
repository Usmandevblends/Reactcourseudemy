import React, { useState } from "react";
import Item from "./Item"; // Import the Item component

function PackingList({ initialItems }) {
  return (
    <>
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item}/> 
        ))}
      </ul>
    </>
  );
}

export default PackingList;
