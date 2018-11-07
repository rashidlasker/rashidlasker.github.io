import React, { Component } from 'react';
import projectData from '../../data/links.json';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  renderSearchBar() {
    return (
      <input type="text" className="projects-search" placeholder="Search.."/>
    )
  }

  render() {
    return (
      <div className="projects-content">
        {this.renderSearchBar()}
      </div>
    );
  }
}

export default Projects;
