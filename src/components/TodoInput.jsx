import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesumbit", text);
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div>
      <div style={{ minWidth: "200px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(event) => setText(event.target.value)}
            style={{
              width: "400px",
              height: "50px",
              fontSize: "1rem",
              paddingLeft: "15px",
              borderRadius: "20px 0 0 20px",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <button
            style={{
              height: "50px",
              width: "75px",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "#33B744",
              fontSize: "1rem",
              color: "white",
              cursor: "pointer",
              outline: "none",
            }}
            onClick={handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
