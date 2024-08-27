import "./App.css";
const App = () => {
  const divfunction = (e) => {
    console.log("div function :", e);
  };
  const buttonfunction = (e) => {
    e.stopPropagation();
    console.log("button function : ", e);
  };

  return (
    <div className="first-div" onClick={divfunction}>
      <h1>welcome to everyone </h1>
      <button onClick={buttonfunction}>increment</button>
    </div>
  );
};

export default App;
