"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const getTodoListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  return await prisma.todo.findMany({
    where: {
      userId: userId as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
interface TodoValues {
  userId: string | null;
  description?: string | undefined;
  completed?: boolean | undefined;
  title: string;
}
export const createTodoAction = async ({
  title,
  completed,
  description,
  userId,
}: TodoValues) => {
  await prisma.todo.create({
    data: { userId: userId as string, title, description, completed },
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
