/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ManagerPage } from "./Component/manager/manager.js";
import { RedirectPage } from "./Component/mainPageForRedirect";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/manager/*" element={<ManagerPage />} />
          <Route path="/" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
