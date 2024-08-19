import { Request, Response } from "express";
import { TodoModel } from "../models/todo";
import * as DTO from "../dto/todo.dto";

const todoModel = new TodoModel();

export class TodoController {
  static getAll(req: Request, res: Response): void {
    res.status(200).json(todoModel.getAll());
  }

  static getById(req: Request, res: Response): void {
    const id = req.params.id;
    const todo = todoModel.getById(+id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  static create(req: Request, res: Response): void {
    const data: DTO.CreateTodoDTO = req.body;
    const todo = todoModel.create(data);
    res.status(201).json(todo);
  }

  static update(req: Request, res: Response): void {
    const id = req.params.id;
    const data: DTO.UpdateTodoDTO = req.body;
    const todo = todoModel.update(+id, data);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  static delete(req: Request, res: Response): void {
    const id = req.params.id;
    const todo = todoModel.delete(+id);
    if (todo) {
      res.status(200).send("Todo deleted");
    } else {
      res.status(404).send("Todo not found");
    }
  }
}
