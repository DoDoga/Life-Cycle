import logo from "./logo.svg";
import { Link, Route } from "react-router-dom";
import Clock from "./CyclePage/Clock";
import "./App.css";

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/Clock" className="App-link">Clock</Link>
        </header>
        </div>
    );
}

export default App;
