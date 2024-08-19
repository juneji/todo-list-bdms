import * as DTO from "../dto/todo.dto";

export interface Todo {
  id: number;
  title: string;
  detail?: string;
  priority?: "low" | "medium" | "high";
  isComplete: boolean;
}

export class TodoModel {
  private todos: Todo[] = [];
  private currentId: number = 1;

  getAll(): Todo[] {
    return this.todos;
  }

  getById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  create(data: DTO.CreateTodoDTO): Todo {
    const todo: Todo = {
      id: this.currentId++,
      ...data,
      isComplete: false,
    };
    this.todos.push(todo);
    return todo;
  }

  update(id: number, data: DTO.UpdateTodoDTO): Todo | null {
    const todo = this.getById(id);
    if (todo) {
      Object.assign(todo, data);
      return todo;
    }
    return null;
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
