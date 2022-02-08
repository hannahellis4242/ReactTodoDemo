import { Router } from "express";
import { addTodo, getTodos, removeTodo } from "../controlers/TodoControlers";

const todoRouter = Router();
todoRouter.get("/", getTodos);
todoRouter.post("/", addTodo);
todoRouter.delete("/", removeTodo);

export default todoRouter;
