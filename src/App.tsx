import { useState } from "react";
import "./App.css";
import { HomeComponent } from "./component";
import { Header } from "./component/Header";
import { TodoForm } from "./component/taskManager/todoForm";
import { TodoList } from "./component/taskManager/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <Header />
      <div className="finace-taskManager">
        <HomeComponent />
        <div>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
