import React, { Component } from 'react';

class ProjectModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <img src={this.props.img} />
        <div className="project-text">
          <h3>{this.props.data['title']}</h3>
          <p>{this.props.data['summary']}</p>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
