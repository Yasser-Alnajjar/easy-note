import { todoSchema } from "@/validation/todo.schema";
import { z } from "zod";

export type todoFormValues = z.infer<typeof todoSchema>;
