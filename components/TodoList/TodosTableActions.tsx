"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ITodo } from "@/interfaces";
import { deleteTodoAction } from "@/actions/todo.actions";
import EditTodoForm from "../EditTodoFrom/inedx";
import { Trash, Loader } from "lucide-react";

export default function TodosTableActions({ todo }: { todo: ITodo }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? (
          <Loader className="animate-spin" size={16} />
        ) : (
          <Trash size={16} />
        )}
      </Button>
    </>
  );
}
