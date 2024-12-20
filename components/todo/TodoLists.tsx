"use client";
import { RootState } from "@/services";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

function TodoLists() {
  const { todos } = useSelector((state: RootState) => state.todos);

  return (
    <div className="w-full flex flex-col gap-4 px-6">
      {todos?.length === 0 ? (
        <div>No Todo found</div>
      ) : (
        todos?.map((todo, idx) => <TodoCard key={idx} todo={todo} />)
      )}
    </div>
  );
}

export default TodoLists;
