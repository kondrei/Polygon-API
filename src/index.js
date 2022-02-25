import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import NavBar from "./navbar";
import Home from "./home";
import Create from "./create";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
