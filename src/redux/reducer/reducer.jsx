import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_TODO_LİST,
  FILTER_TODO,
} from "../types/types";

const INITIAL_STATE = {
  counter: 0,
  list: [{ id: 0, text: "Add Todo", completed: false }],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
      };

    case CLEAR_TODO_LİST:
      return INITIAL_STATE;

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case FILTER_TODO:
      return {
        ...state,
        list: state.list.filter((todo) =>
          !todo.completed === true ? todo : null
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
