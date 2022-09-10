import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Sample } from "./Component/sample";
import { Sample2 } from "./Component/sample2";
import { Sample3 } from "./Component/sample3";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">1</Link>
            </li>
            <li>
              <Link to="/about">2</Link>
            </li>
            <li>
              <Link to="/topics">3</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Sample />} />
            <Route path="/about" element={<Sample2 />} />
            <Route path="/topics" element={<Sample3 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
