import React from "react";

function Item({ item }) {
  return (
    <>
      <li>{item.description}</li>
    </>
  );
}

export default Item;