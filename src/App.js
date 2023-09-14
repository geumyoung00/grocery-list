import React, { useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, addItem]);
    e.target.reset();
  };

  const inputHandler = (e) => {
    setAddItem(e.target.value);
  };

  return (
    <>
      <h1>Project 3: Grocery List</h1>
      <div className="shopping-list">
        <h2>Groceries to buy</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
            onChange={inputHandler}
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((el, idx) => (
            <li key={idx}>
              {el}
              <button className="delete">x</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
