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

export const removeTodo: RequestHandler = (req, res) => {
  if (req.query.id) {
    const idToRemove = req.query.id.toString();
    data = data.filter(({ id }) => id !== idToRemove);
    res.status(200).send();
  } else {
    res.status(500).json({ error: true, msg: "add an id query to request" });
  }
};
