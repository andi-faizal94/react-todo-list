import "./App.css";
import Todo from "./components/Todo/Todo.js";
import Todolist from "./components/Todo-list/TodoList.js";

const App = () => {
  return (
    <>
      <div className="App">
        <Todo />
        <Todolist />
      </div>
    </>
  );
};

export default App;
