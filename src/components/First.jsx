/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Second from "./Second";
const First = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        // return <p key={index}>{todo}</p>;
        return <Second key={index} tod={todo} />;
      })}
    </div>
  );
};

export default First;
