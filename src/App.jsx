import { memo } from "react";
import TodoApp from "./components/to do list/TodoApp";

function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

export default memo(App);
