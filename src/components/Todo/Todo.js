import "../Todo/Todo.css";
import { useState } from "react";
import Todolist from "../Todo-list/TodoList.js";
import TodoCreate from "../Todo-create/TodoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    {
      id: 1,
      title: "learning react",
    },
  ]);
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    // console.log(getTodos);
  };
  return (
    <div className="App">
      <h3>Todo list</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <Todolist dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
