import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Project from './Project';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="content">
          <NavLink className="link link-1" to="">Rashid Lasker</NavLink>
          <span className="divider">|</span>
          <NavLink className="link link-3" to="/projects/">Projects</NavLink>
          {/* <Link className="link link-4" to="/links/">Links</Link> */}
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/" exact component={Projects} />
          {/* <Route path="/links/" exact component={Home} /> */}
          <Route path="/projects/:id/" component={Project} />
          <Route path="*" render={() => <Redirect to="/" />} /> 
        </Switch>
        <footer className="content" />
      </div>
    </Router>
  );
}

export default App;
