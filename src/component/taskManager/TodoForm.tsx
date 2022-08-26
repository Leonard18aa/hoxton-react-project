import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoForm.css";


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
      <h1 className="todoList">Todo List </h1>
      <form className="todoGroup" onSubmit={handleSubmit}>
        
        <input
        className="inputForTodo"
        placeholder="Add Todo"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button className="todoButton" type="submit">todo</button>
      </form>
    </div>
  );
}
