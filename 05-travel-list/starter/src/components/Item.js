import React from "react";

function Item({ item }) {
  return (
    <>
      <li>
        <span>
          {''}
          {item.qunantity}
          {item.description}
          </span>
      </li>
    </>
  );
}

export default Item;