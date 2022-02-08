import axios from "axios";
import { createContext, useEffect, useState } from "react";
import TodoModel from "../Models/TodoModel";

interface TodoModelContext {
  items: TodoModel[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
}

export const TodoContext = createContext<TodoModelContext>({
  items: [],
  addItem: (text: string) => {},
  removeItem: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [items, setItems] = useState<TodoModel[]>([]);

  const getItems = () => {
    axios.get("http://localhost:5000/todo").then((results) => {
      setItems((prev) => results.data);
    });
  };

  useEffect(getItems, []);

  const addItemHandler = (text: string) => {
    axios
      .post("http://localhost:5000/todo", new TodoModel(text))
      .then(getItems);
  };

  const removeItemHandler = (id: string) => {
    axios
      .delete("http://localhost:5000/todo", { params: { id } })
      .then(getItems);
  };

  const context = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
