import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const AddTodo: React.FC = () => {
  const context = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputRef.current;
    if (input) {
      context.addItem(input.value);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={inputRef}></input>
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
