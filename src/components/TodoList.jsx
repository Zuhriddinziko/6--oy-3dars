import TodoItem from "./TodoItem";
const TodoList = ({ todos, deleteTodo, chengeStatus }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            chengeStatus={chengeStatus}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
