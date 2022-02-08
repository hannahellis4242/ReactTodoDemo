import React from "react";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
const App: React.FC = () => {
  return (
    <section>
      <header>Todo List</header>
      <AddTodo />
      <Todos />
    </section>
  );
};

export default App;
