import { RequestHandler } from "express";
//quick and dirty method for now
interface Todo {
  id: string;
  text: string;
}

let data: Todo[] = [];

export const getTodos: RequestHandler = (_, res) => {
  res.status(200).json(data);
};

export const addTodo: RequestHandler = (req, res) => {
  const newTodo: Todo = req.body;
  data.push(newTodo);
  res.status(200).send();
};

interface RemoveRequestBody {
  id: string;
}

export const removeTodo: RequestHandler = (req, res) => {
  const body: RemoveRequestBody = req.body;
  data = data.filter(({ id }) => id !== body.id);
  res.status(200).send();
};
