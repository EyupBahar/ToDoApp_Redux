import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white", fontSize: "10vh", fontFamily: "monospace" }}>
        My Todo List
      </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
