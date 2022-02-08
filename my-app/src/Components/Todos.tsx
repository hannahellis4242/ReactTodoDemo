import classes from "./Todos.module.css";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const Todos: React.FC = () => {
  const context = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {context.items.map((item) => (
        <li key={item.id}>
          <Todo
            text={item.text}
            onRemove={() => {
              context.removeItem(item.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
export default Todos;
