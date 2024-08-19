import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

const todoRoute = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the todo
 *         title:
 *           type: string
 *           description: The title of your todo
 *         detail:
 *           type: string
 *           description: The detail of your todo
 *         priority:
 *           type: string
 *           enum:
 *             - low
 *             - medium
 *             - high
 *           description: The priority of your todo
 *         isComplete:
 *           type: boolean
 *           description: The status of your todo
 *       example:
 *         id: 1
 *         title: Buy groceries
 *         detail: Milk, eggs, bread
 *         priority: medium
 *         isComplete: false
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
todoRoute.get("/", TodoController.getAll);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */
todoRoute.get("/:id", TodoController.getById);

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of your todo
 *               detail:
 *                 type: string
 *                 description: The detail of your todo
 *               priority:
 *                 type: string
 *                 enum:
 *                   - low
 *                   - medium
 *                   - high
 *                 description: The priority of your todo
 *             example:
 *               title: Buy groceries
 *               detail: Milk, eggs, bread
 *               priority: medium
 *     responses:
 *       201:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
todoRoute.post("/", TodoController.create);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update the todo by the id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of your todo
 *               detail:
 *                 type: string
 *                 description: The detail of your todo
 *               priority:
 *                 type: string
 *                 enum:
 *                   - low
 *                   - medium
 *                   - high
 *                 description: The priority of your todo
 *               isComplete:
 *                 type: boolean
 *                 description: The status of your todo
 *             example:
 *               title: Buy groceries
 *               detail: Milk, eggs, bread
 *               priority: medium
 *               isComplete: true
 *     responses:
 *       200:
 *         description: The todo was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some error happened
 */
todoRoute.put("/:id", TodoController.update);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       204:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */
todoRoute.delete("/:id", TodoController.delete);

export { todoRoute };
