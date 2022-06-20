import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'
import Error404 from './components/Error404'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink 
                activeStyle={{backgroundColor: "black", color: "white"}} 
                exact
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink 
              activeStyle={{backgroundColor: "blue", color:"white"}}
              to="/about">About</NavLink>
            </li>
            <li>
              <NavLink 
              activeClassName="pink"
              to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}


