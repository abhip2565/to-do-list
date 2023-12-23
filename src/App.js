import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Read SpringBoot", completed: false },
    { text: "Complete assignments", completed: false },
    { text: "Prepare breakfast", completed: false },
    { text: "Sleep for 2 hours", completed: false },
    { text: "Take a shower", completed: false },
  ]);

  // Function to delete all tasks
  function handleDeleteButtonClick() {
    const newTasks =tasks.filter((X)=>X.completed==false)
    setTasks(newTasks);
  }

  // Function to toggle the completed state of a task
  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  return (
    <div className="Application">
      <h1>Keep on Track</h1>
      <h2>Here's what your day looks like</h2>
      <div style={{ textAlign: "left" }}>
        {tasks.length > 0 ? (
          <List tasks={tasks} toggleTask={toggleTask} />
        ) : (
          <>Sleep</>
        )}
        {tasks.length > 0 && <Button onDelete={handleDeleteButtonClick} />}
      </div>
    </div>
  );
}

// List component
function List({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => toggleTask(index)}
        
          style={{ cursor:"pointer", textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

// Button component
function Button({ onDelete }) {
  return <button onClick={onDelete}>Delete</button>;
}
