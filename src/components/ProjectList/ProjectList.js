import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectCard from '../../components/ProjectCard';
import ProjectModal from '../../components/ProjectModal';
import { importAll } from '../../utils';
const images = importAll(require.context('../../img/projects', false, /\.(PNG|JPE?G|SVG|GIF)$/));

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.previousView = this.props.location;
  }

  renderProjectList() {
    let projectDataKeys = Object.keys(this.props.projects);
    if (projectDataKeys.length === 0) {
      return(
        <h1>Oops! Can't find anything...</h1>
      )
    } else {
      return projectDataKeys.map(key => {
        return (
          <ProjectCard key={key} data={this.props.projects[key]} img={images[this.props.projects[key]['imageLink']]} />
        )
      })
    } 
  }

  render() {
    const { location } = this.props;
    const modal = location.state && location.state.to === 'modal';
    
    return (
      <div>
        <div className="projects-list">
          {this.renderProjectList()}
        </div>
        <div className="modal-container">
          <Switch location={location}>
            <Route path="/:id" component={ProjectModal} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProjectList;
