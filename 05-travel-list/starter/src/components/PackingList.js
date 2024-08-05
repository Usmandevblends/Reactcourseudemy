import React from "react";

function PackingList(initialItems) {
  return (
    <>
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </>
  );
}

export default PackingList;
