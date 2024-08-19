export interface CreateTodoDTO {
  title: string;
  detail?: string;
  priority?: "low" | "medium" | "high";
}

export interface UpdateTodoDTO {
  title?: string;
  detail?: string;
  priority?: "low" | "medium" | "high";
  isComplete?: boolean;
}
