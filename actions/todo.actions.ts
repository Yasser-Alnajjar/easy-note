"use server";

import { ITodo } from "@/interfaces";
import { todoFormValues } from "@/types/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const createTodoAction = async ({
  title,
  completed,
  description,
}: todoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      description,
      completed,
    },
  });
  revalidatePath("/");
};
export const updateTodoAction = async ({
  id,
  title,
  description,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });
  revalidatePath("/");
};
export const deleteTodoAction = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
