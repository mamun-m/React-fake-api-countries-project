/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
const Countries = (props) => {
  const { name, area, flags, capital, population } = props.country;
  const handlefunction = (name) => {
    props.onRemoveFunction(name);
  };
  return (
    <div className="country-container">
      <div className="country-content">
        <img src={flags.png} alt={name.common} />
        <h3>Name : {name.common}</h3>
        <h3>Capital : {capital}</h3>
        <h3>Area : {area}</h3>
        <h3>Population :{population}</h3>
        <button
          className="remove-button"
          onClick={() => handlefunction(name.common)}
        >
          remove{" "}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Countries;
