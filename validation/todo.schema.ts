import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(20, {
      message: "Title must be not longer than 20 characters.",
    }),
  description: z
    .string()
    .max(100, {
      message: "Title must be not longer than 80 characters.",
    })
    .optional(),
  completed: z.boolean().optional(),
});
