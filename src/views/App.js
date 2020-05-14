import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="">Rashid Lasker</Link>
          <Link to="">Home</Link>
          <Link to="/projects/">Projects</Link>
          <Link to="/links/">Links</Link>
        </nav>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/projects/" component={Projects} />
          <Route path="/links/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
