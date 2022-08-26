import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e: { target: { vaule: any; }; }) {
    setTodo({ ...todo, task: e.target.vaule });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4.v4() });
      setTodo({...todo, task: ""})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type="submit">todo</button>
      </form>
    </div>
  );
}
