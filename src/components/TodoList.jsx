import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList, filterTodos } from "../redux/actions/actions";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };
  const handleFilterCompleted = () => {
    dispatch(filterTodos());
  };
  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        onClick={handleClearList}
        style={{
          height: "50px",
          width: "100px",
          marginTop: "25px",
          fontSize: "1rem",
          backgroundColor: "#ac0d0d",
          color: "white",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        Clear
      </button>
      <button
        onClick={handleFilterCompleted}
        style={{
          height: "50px",
          width: "120px",
          marginTop: "25px",
          fontSize: "1rem",
          backgroundColor: "#33B744",
          color: "white",
          cursor: "pointer",
          borderRadius: "10px",
          padding: "5px",
          margin: "10px",
        }}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default Todolist;
