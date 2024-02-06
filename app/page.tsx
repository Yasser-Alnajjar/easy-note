import Navbar from "@/components/shared/Navbar";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoList";
import { getTodoListAction } from "@/actions/todo.actions";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="container">
      <Navbar />
      <AddTodoForm />
      <TodosTable todos={todos} />
    </main>
  );
}
