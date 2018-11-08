import React, { Component } from 'react';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <img src={this.props.img} />
        <h1>{this.props.data['title']}</h1>
        <p>{this.props.data['summary']}</p>
      </div>
    );
  }
}

export default ProjectCard;
