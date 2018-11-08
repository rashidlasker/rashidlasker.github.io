import React, { Component } from 'react';
import projectData from '../../data/projects.json';
import { queryMatch } from '../../utils';
import './Projects.css';
import ProjectList from '../../components/ProjectList';

/*  
  Image notes:
  UI colors here: https://flatuicolors.com/palette/us
  Thumbnail dimensions: 700x439
  Screely link: https://www.screely.com/editor
*/

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false,
      projects: projectData,
      showSearchBar: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  queryProjects(value) {
    let result = {}, key;
    let query = value.toLowerCase();

    for (key in projectData) {
      let currProject = projectData[key]
      let accepted = false;

      if (queryMatch(query, currProject['title'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['summary'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['description'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['languages'].join(" "))) {
        accepted = true;
      } else if (queryMatch(query, currProject['tools'].join(" "))) {
        accepted = true;
      } else if (queryMatch(query, currProject['tags'].join(" "))) {
        accepted = true;
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
        placeholder="Search"
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    )
  }

  render() {
    return (
      <div className="projects-content">
        {this.state.showSearchBar && this.renderSearchBar()}
        <ProjectList projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
