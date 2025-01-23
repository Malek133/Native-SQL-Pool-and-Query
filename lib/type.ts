export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export type AddTodo = Partial<Pick<Todo, 'id'>> & Omit<Todo, 'id'>