import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Project from './Project';

const App = () => {
  // TODO: render resume pdf in react
  return (
    <Router>
      <div className="App">
        <nav className="content">
          <NavLink className="link link-1" to="">Rashid Lasker</NavLink>
          <span className="divider">|</span>
          <NavLink className="link link-3 subnav" to="/projects/">Projects</NavLink>
          <a className="link link-4 subnav" href="https://www.docdroid.net/qwKrlFH/rashid-lasker-resume-colored-pdf">R&eacute;sum&eacute;</a>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/" exact component={Projects} />
          <Route path="/projects/:id/" component={Project} />
          <Route path="*" render={() => <Redirect to="/" />} /> 
        </Switch>
        <footer className="content" />
      </div>
    </Router>
  );
}

export default App;
