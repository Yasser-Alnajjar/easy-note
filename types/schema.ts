import { todoSchema } from "@/validation/todo.schema";
import { z } from "zod";

export type TodoFormValues = z.infer<typeof todoSchema>;
