import ReactDOM from "react-dom";
import App from "./App";
import TodoContextProvider from "./store/TodoContext";

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementsByTagName("main")[0]
);
