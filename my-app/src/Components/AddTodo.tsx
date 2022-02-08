import classes from "./AddTodo.module.css";
import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const AddTodo: React.FC = () => {
  const context = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputRef.current;
    if (input && input.value !== "") {
      context.addItem(input.value);
      input.value = "";
      handleInputChanged();
    }
  };

  const handleInputChanged = () => {
    const button = buttonRef.current;
    if (button) {
      const input = inputRef.current;
      if (input) {
        button.disabled = input.value === "";
      }
    }
  };

  return (
    <form className={classes.add} onSubmit={onSubmitHandler}>
      <div className={classes.input}>
        <label htmlFor="text">What do you need to do? </label>
        <input
          type="text"
          id="text"
          ref={inputRef}
          onChange={handleInputChanged}
        ></input>
      </div>
      <div className={classes.submit}>
        <button ref={buttonRef} disabled={true}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
