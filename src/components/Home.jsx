/* eslint-disable no-unused-vars */
import { useState } from "react";
import First from "./First";
import NewTodo from "./NewTodo";

const dummytodos = ["todo1", "todo2"];
const Home = () => {
  const [todos, settodos] = useState(dummytodos);
  const sharefunction = (newtodo) => {
    settodos([...todos, newtodo]);
  };
  return (
    <div>
      <NewTodo ontodo={sharefunction} />
      <First todos={todos} />
    </div>
  );
};

export default Home;
