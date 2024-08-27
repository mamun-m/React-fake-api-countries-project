/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const Second = (props) => {
  console.log(props.tod);
  return (
    <div>
      <p>{props.tod}</p>
    </div>
  );
};

export default Second;
