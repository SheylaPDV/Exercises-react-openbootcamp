import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./Exercises/ComponentA";
import Clock from "./Exercises/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA /> */}
        <Clock />
      </header>
    </div>
  );
}

export default App;
