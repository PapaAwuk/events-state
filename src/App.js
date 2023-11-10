//import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("clicked!!");
  };
  const entered = () => {
    console.log("entered");
  };
  const exit = () => {
    console.log("Exit");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <div
        onMouseOver={entered}
        onMouseOut={exit}
        style={{ height: 100, width: 100, backgroundColor: "red" }}
      ></div>
    </div>
  );
}

export default App;
