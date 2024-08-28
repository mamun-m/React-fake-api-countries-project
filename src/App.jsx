import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, settodos] = useState("");
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/tod")
        .then((res) => {
          settodos(res.data);
          setisloading(false);
        })
        .catch((err) => {
          setisloading(false);
          seterror(err.message);
        });
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>axios api data program</h1>
      {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
      {isloading && <p>data is loading now .... </p>}
      {error && error}
    </div>
  );
};

export default App;
