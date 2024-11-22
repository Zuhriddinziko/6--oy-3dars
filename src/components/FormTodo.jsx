import { useState } from "react";

const FormTodo = ({ addTodo }) => {
  const [titles, setTitles] = useState("");
  const handInfo = (e) => {
    // console.log(e);
    e.preventDefault();
    // console.log(1);
    if (!titles.trim()) {
      alert("please fill info");
      return;
    }
    addTodo({
      id: Math.random(),
      title: titles,
      completed: false,
    });
  };
  //   console.log(titles);
  return (
    <form onSubmit={handInfo}>
      <label>
        <span>Title:</span>
        <input
          type="text"
          placeholder="   rejalaringizni kiriting"
          onChange={(e) => setTitles(e.target.value)}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default FormTodo;
