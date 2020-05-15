import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Project from './Project';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="content">
          <Link className="link link-1" to="">Rashid Lasker</Link>
          <span className="divider">|</span>
          <Link className="link link-4" to="/projects/">Projects</Link>
        </nav>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/projects/" exact component={Projects} />
          <Route path="/projects/:id/" component={Project} />
          {/* <Route render={() => <Redirect to="/" />} />  */}
        </div>
        <footer className="content" />
      </div>
    </Router>
  );
}

export default App;
