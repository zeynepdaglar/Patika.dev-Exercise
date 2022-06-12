import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
//Import Pages:
import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'

function App() {
  return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
    
            <Routes>
              <Route path="/about" element={<About/>} />

              <Route path="/users" element={<Users/>} />

              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </Router>
  );
}

export default App