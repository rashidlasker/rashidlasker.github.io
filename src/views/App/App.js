import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../Home';
import Projects from '../Projects';
import Links from '../Links';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <h1>Rashid Lasker</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects/">Projects</Link>
              </li>
              <li>
                <Link to="/links/">Links</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/links/" component={Links} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
