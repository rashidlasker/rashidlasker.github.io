import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { importAll } from '../../utils';
const images = importAll(require.context('../../img/projects', false, /\.(PNG|JPE?G|SVG|GIF)$/));

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  renderProjectList() {
    let projectDataKeys = Object.keys(this.props.projects);
    console.log(images);
    return projectDataKeys.map(key => {
      return (
        <ProjectCard key={key} data={this.props.projects[key]} img={images[this.props.projects[key]['imageLink']]} />
      )
    })
  }

  render() {
    return (
      <div className="projects-list">
        {this.renderProjectList()}
      </div>
    );
  }
}

export default ProjectList;
