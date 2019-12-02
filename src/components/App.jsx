import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);
  }

  return (
    <div className="container">
      <button onClick={addItem}>Add A Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
