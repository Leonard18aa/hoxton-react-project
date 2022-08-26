import { useState } from "react";
import uuid from "uuid";

export function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.vaule });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
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
