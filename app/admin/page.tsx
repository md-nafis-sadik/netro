import TodoForm from "@/components/todo/TodoForm";
import TodoLists from "@/components/todo/TodoLists";

function Admin() {
  return (
    <section className="py-14">
      <div className="containerX">
        <div className="flex w-full divide-x gap-6">
          <TodoForm />
          <TodoLists />
        </div>
      </div>
    </section>
  );
}

export default Admin;
