import { useState } from "react";
import { Toaster, toast } from "sonner";

const FormTodo = ({ addTodo }) => {
  const [titles, setTitles] = useState("");
  const handInfo = (e) => {
    // console.log(e);
    e.preventDefault();
    // console.log(1);
    if (!titles.trim()) {
      toast.warning("please, fill info");
      return;
    }
    addTodo({
      id: Math.random(),
      title: titles,
      completed: false,
    });
    setTitles("");
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
          value={titles}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default FormTodo;
