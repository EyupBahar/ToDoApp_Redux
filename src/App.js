import "./App.css";
import TodoInput from "./component/TodoInput";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Clarus Todos</h1>
      <TodoInput />
      <Todolist />
    </div>
  );
}

export default App;
