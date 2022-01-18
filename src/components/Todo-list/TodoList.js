import "../Todo-list/TodoList.css";

const Todolist = (props) => {
  console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default Todolist;
