import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import NavBar from "./navbar";
import Home from "./home";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoound from "./404";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="create" element={<Create />} />
                        <Route path="blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<NotFoound />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
