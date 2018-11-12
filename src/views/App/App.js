import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../Home';
import Projects from '../Projects';
import Links from '../Links';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atTop: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let pos = document.documentElement.scrollTop;
    if (pos > 0) {
      this.setState({
        atTop: false
      });
    } else {
      this.setState({
        atTop: true
      });
    }
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className={this.state.atTop ? "" : "moved"}>
            <h1>Rashid Lasker</h1>
            <ul>
              <li>
                <Link to="" activeClassName="nav-selected">Home</Link>
              </li>
              <li>
                <Link to="/projects/" activeClassName="nav-selected">Projects</Link>
              </li>
              <li>
                <Link to="/links/" activeClassName="nav-selected">Links</Link>
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
