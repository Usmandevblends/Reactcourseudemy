import React, { useState } from "react";

function Form() {
  const [description, setDescription] =useState('')
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
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
        <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)} />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
}

export default Form;
