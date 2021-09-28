import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import todo3 from "./assets/todo3.jpeg";

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
