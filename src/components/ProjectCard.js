import React from 'react';

const ProjectCard = ({ img, data }) => {
  return (
    <div className="card">
      <a href="#">
        <img src={img} />
        <div className="card-body">
          <div className="card-title">{data['title']}</div>
          <div className="card-text">{data['summary']}</div>
          <div className="card-tags">
            <span className="card-tag">WEB</span>
            <span className="card-tag">PYTHON</span>
            <span className="card-tag">JS</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
