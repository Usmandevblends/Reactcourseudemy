import React from "react";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <React.Fragment key="form">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select className="">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item..." />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
}

export default Form;
