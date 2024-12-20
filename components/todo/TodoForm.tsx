"use client";
import { addNewTodo } from "@/services/store/modules/todo/slice";
import React from "react";
import { useDispatch } from "react-redux";

function TodoForm() {
  const dispatch = useDispatch();
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const titleInput = form.title as unknown as HTMLInputElement;
    const title = titleInput.value;
    if (!title || title?.trim() === "") return;
    dispatch(addNewTodo(title));
    titleInput.value = "";
  };
  return (
    <form
      onSubmit={addTodo}
      className="flex flex-col gap-4 w-full max-w-[420px] mx-auto rounded-2xl"
    >
      <input
        type="text"
        className="input"
        name="title"
        autoComplete="title"
        placeholder="Enter title"
      />
      <button
        type="submit"
        className="bg-neutral-900 py-3 px-6 rounded-lg text-white"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
