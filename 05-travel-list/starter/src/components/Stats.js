import React from "react";

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round(numPacked / numItems);
  return (
    <>
      <footer className="stats">
        <em>
          {" "}
          💼 You Have {numItems} items on Your list, and you already packed{" "}
          {numPacked} ({percentage})
        </em>
      </footer>
    </>
  );
}

export default Stats;
