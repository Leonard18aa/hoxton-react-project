import { useEffect, useState } from "react";
import "./App.css";
import { HomeComponent } from "./component";
import { Header } from "./component/Header";
import { TodoForm } from "./component/taskManager/TodoForm";
import { TodoList } from "./component/taskManager/TodoList";

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <Header />
      <div className="finace-taskManager">
        <HomeComponent />
        <div className="TodoApp">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
