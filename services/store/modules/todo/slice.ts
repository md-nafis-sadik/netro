import { TodoState } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TodoState = {
  todos: [],
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add reducers here
    addNewTodo: (state, action) => {
      const timestamp = new Date().getTime();
      state.todos = [
        {
          id: timestamp,
          title: action.payload,
          completed: false,
        },
        ...state.todos,
      ];
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addNewTodo, toggleTodo, removeTodo } = slice.actions;
export default slice.reducer;
