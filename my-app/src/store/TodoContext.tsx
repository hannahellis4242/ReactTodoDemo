import { createContext, useState } from "react";
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

  const addItemHandler = (text: string) => {
    setItems((prev) => prev.concat(new TodoModel(text)));
  };

  const removeItemHandler = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
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
