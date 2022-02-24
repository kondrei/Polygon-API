import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import NavBar from './navbar';
import Home from './home';
import Create from './create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <Router>
            <div className="App">
                < NavBar />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='create/' element={<Create />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))