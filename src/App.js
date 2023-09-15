import React, { useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const addItem = e.target["item"].value;
    setItems((prev) => [...prev, addItem]);
    e.target.reset();
  };

  const removeHandler = (item) => {
    console.log(item);
    const removeItem = item;
    const newItems = items.filter((item) => removeItem !== item);
    console.log(newItems);
    setItems(newItems);
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
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((el, idx) => (
            <li key={idx}>
              {el}
              <button className="delete" onClick={() => removeHandler(el)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
