/* eslint-disable react/prop-types */
import { useState } from "react";

const NewTodo = (props) => {
  const [todos, settodos] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    props.ontodo(todos);
  };
  const handlerinput = (e) => {
    settodos(e.target.value);
  };
  return (
    <div>
      <form onSubmit={formsubmit}>
        <input type="text" name="name" value={todos} onChange={handlerinput} />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
