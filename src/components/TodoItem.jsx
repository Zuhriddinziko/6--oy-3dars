const TodoItem = ({ todo, chengeStatus, deleteTodo }) => {
  return (
    <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
      <h1>{todo.title}</h1>
      {!todo.completed && (
        <button onClick={() => chengeStatus(todo.id)}>bajarish</button>
      )}
      {todo.completed && (
        <button onClick={() => chengeStatus(todo.id)}>qaytarish</button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
