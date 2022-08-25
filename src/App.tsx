import "./App.css";
import Budget from "./component/Budget";
import { Finance } from "./component/Finance";
import { Header } from "./component/Header";
import { TaskManager } from "./component/TaskManager";

function App() {
  return (
    <div className="App">
      <Header />
      <Finance />
      <TaskManager />
    </div>
  );
}

export default App;
