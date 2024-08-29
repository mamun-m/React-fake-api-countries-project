/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../App.css";

const Search = (props) => {
  const [search, setsearch] = useState("");
  const searchFunction = (e) => {
    props.onsearch(e.target.value);
    setsearch(e.target.value);
  };
  //   useEffect(() => {
  //     props.onsearch(search);
  //   }, []);

  return (
    <div>
      <input
        className="input-search"
        type="text"
        name="name"
        value={search}
        placeholder="Enter your text here ...."
        onChange={searchFunction}
      />
    </div>
  );
};

export default Search;
