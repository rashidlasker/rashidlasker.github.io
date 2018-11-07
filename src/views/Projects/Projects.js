import React, { Component } from 'react';
import projectData from '../../data/projects.json';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false,
      projects: projectData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  queryProjects(value) {
    let result = {}, key;
    let query = value.toLowerCase();

    for (key in projectData) {
      let currProject = projectData[key]
      let accepted = false;

      if (currProject['title'].toLowerCase().indexOf(query) !== -1) {
        accepted = true;
      } else if(currProject['summary'].toLowerCase().indexOf(query) !== -1) {
        accepted = true;
      } else if(currProject['description'].toLowerCase().indexOf(query) !== -1) {
        accepted = true;
      } else {
        for (var i in currProject['languages']) {
          if(currProject['languages'][i].toLowerCase().indexOf(query) !== -1) {
            accepted = true;
            break;
          }
        }
        for (var i in currProject['tools']) {
          if(currProject['tools'][i].toLowerCase().indexOf(query) !== -1) {
            accepted = true;
            break;
          }
        }
        for (var i in currProject['tags']) {
          if(currProject['tags'][i].toLowerCase().indexOf(query) !== -1) {
            accepted = true;
            break;
          }
        }
      } 

      if (accepted) {
        result[key] = projectData[key];
      }
    }

    this.setState({loading: false, projects: result});
  }

  handleChange(event) {
    this.setState({value: event.target.value, loading: true});
    this.queryProjects(event.target.value)
  }

  renderSearchBar() {
    return (
      <input type="text" 
        className="projects-search" 
        placeholder="Search.."
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    )
  }

  render() {
    return (
      <div className="projects-content">
        {this.renderSearchBar()}
        {JSON.stringify(this.state.projects)}
      </div>
    );
  }
}

export default Projects;
