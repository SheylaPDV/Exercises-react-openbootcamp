import logo from "./logo.svg";
import "./App.css";
// import ComponentA from "./Exercises/ComponentA";
import Contactos from "./Exercises/Lista/Contactos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA /> */}
        {/* <Clock /> */}
        <Contactos />
      </header>
    </div>
  );
}

export default App;
