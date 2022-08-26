import { Todo } from "./Todo";


export function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  );
}
