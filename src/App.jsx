/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Search from "./components/Search";

const App = () => {
  const [data, setdata] = useState("");
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setdata(res.data);
        setisloading(false);
      })
      .catch((err) => {
        seterror(err.message);
        setisloading(false);
      });
  }, []);

  const removeFunction = (name) => {
    const filte = data.filter((share) => share.name.common !== name);
    setdata(filte);
  };
  const shareSearch = (share) => {
    const searchfilter = data.filter((country) =>
      country.name.common.toLowerCase().includes(share.toLowerCase())
    );
    setdata(searchfilter);
  };

  return (
    <div className="countries-container">
      <h1>Countries apps </h1>
      <Search onsearch={shareSearch} />
      <div className="country-content-apps">
        {data &&
          data.map((dat) => (
            <Countries
              key={uuidv4()}
              country={dat}
              onRemoveFunction={removeFunction}
            />
          ))}
        {isloading && <p>data is loading ...</p>}
        {error && error}
      </div>
    </div>
  );
};

export default App;
