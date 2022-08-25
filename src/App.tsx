import "./App.css";
import { Finance } from "./component/Finance";
import { Header } from "./component/Header";
import { TaskManager } from "./component/TaskManager";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="finace-taskManager">
        <Finance />
      <TaskManager />
      </div>
      
    </div>
  );
}

export default App;
