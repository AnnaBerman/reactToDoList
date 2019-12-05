import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task && task.length > 0) {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          value: task
        }
      ]);
      setTask("");
    }
  }

  function removeTask(event) {
    var array = [...tasks];
    array.splice(event.target.attributes["index"].value, 1);
    setTasks([...array]);
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleKeyPress(target) {
    if (target.charCode === 13) {
      addTask();
    }
  }

  function markTask(event) {
    event.target.className === "done"
      ? (event.target.className = "")
      : (event.target.className = "done");
  }

  return (
    <div className="container">
      <h1>todo list</h1>
      <input
        onKeyPress={handleKeyPress}
        type="text"
        onChange={handleChange}
        value={task}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li onClick={markTask} key={task.id}>
            <span>{task.value}</span>
            <span index={index} onClick={removeTask} className="close" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
