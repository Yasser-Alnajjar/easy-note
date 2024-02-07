import Navbar from "@/components/shared/Navbar";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoList";
import { getTodoListAction } from "@/actions/todo.actions";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const todos = await getTodoListAction({ userId });
  return (
    <main className="sm:container">
      <Navbar />
      <AddTodoForm userId={userId} />
      <TodosTable todos={todos} />
    </main>
  );
}
