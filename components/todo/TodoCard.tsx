"use client";
import { cn } from "@/lib/utils";
import { Todo } from "@/services";
import { removeTodo, toggleTodo } from "@/services/store/modules/todo/slice";
import { TrashIcon } from "lucide-react";
import { useDispatch } from "react-redux";

function TodoCard({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="px-4 py-3 border border-neutral-300 rounded-lg flex items-center justify-between gap-6 select-none">
      <label
        htmlFor={`todo-${todo?.id}`}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center border border-neutral-300 rounded-full">
          <input
            type="checkbox"
            id={`todo-${todo?.id}`}
            className="checkbox checkbox-xs rounded-full [--chkbg:theme(colors.neutral-300)] [--chkfg:transparent] border-transparent"
            checked={todo?.completed}
            onChange={() => handleToggleTodo(todo?.id)}
          />
        </div>
        <span
          className={cn(
            "text-base",
            todo?.completed
              ? "line-through text-neutral-500"
              : "text-neutral-700"
          )}
        >
          {todo?.title}
        </span>
      </label>
      <button type="button" onClick={() => handleRemoveTodo(todo?.id)}>
        <TrashIcon className="w-5 h-5 text-red-400" />
      </button>
    </div>
  );
}

export default TodoCard;
