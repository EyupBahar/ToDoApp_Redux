import React from "react";

const Todolist = () => {
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
          backgroundColor: "#AC0D0D",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Todolist;
