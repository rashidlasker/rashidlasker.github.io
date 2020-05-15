import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="content">
          <Link className="link link-1" to="">Rashid Lasker</Link>
          <span className="divider">|</span>
          <Link className="link link-3" to="/projects/">Projects</Link>
          <Link className="link link-4" to="/links/">Links</Link>
        </nav>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/projects/" component={Projects} />
          <Route path="/links/" component={Home} />
        </div>
        <footer className="content" />
      </div>
    </Router>
  );
}

export default App;
