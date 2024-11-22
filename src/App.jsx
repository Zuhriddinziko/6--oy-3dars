import { useState } from "react";

//component
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

function App() {
  const [counter, setCounter] = useState([
    {
      id: 1,
      title: "Cleaning rooms",
      completed: false,
    },
    {
      id: 2,
      title: "Cleaning bedrooms",
      completed: true,
    },
    {
      id: 3,
      title: "Clean rooms",
      completed: true,
    },
    {
      id: 4,
      title: "Cleaning bedrooms",
      completed: true,
    },
  ]);
  const adTodo = (todo) => {
    setCounter((prev) => {
      return [...prev, todo];
    });
    // console.log(todo);
  };
  // const counter = 0;

  const deleteTodo = (id) => {
    setCounter((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };
  const chengeStatus = (id) => {
    setCounter((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <>
      <FormTodo addTodo={adTodo} />
      <TodoList
        deleteTodo={deleteTodo}
        chengeStatus={chengeStatus}
        todos={counter}
      />
    </>
  );
}
export default App;
