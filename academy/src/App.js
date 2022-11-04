/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ManagerPage } from "./Component/manager/manager.js";
import { RedirectPage } from "./Component/mainPageForRedirect";
import { StudentPage } from "./Component/student/studentMain";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/manager/*" element={<ManagerPage />} />
          <Route path="/student/*" element={<StudentPage />} />
          <Route path="/" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
