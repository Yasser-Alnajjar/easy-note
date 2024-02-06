export interface ITodo {
  id: string;
  title: string;
  description: string | null;
  completed?: boolean;
  createdAt?: Date;
}
