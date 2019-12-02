import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        value: task
      }
    ]);
    setTask("");
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div className="container">
      <input type="text" onChange={handleChange} value={task} />
      <button onClick={addTask}>Add Task</button>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.value}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
