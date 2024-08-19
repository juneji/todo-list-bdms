import { Router } from "express";
import { todoRoute } from "./todo.route";

const router: Router = Router();
router.use("/todos", todoRoute);

export { router };
