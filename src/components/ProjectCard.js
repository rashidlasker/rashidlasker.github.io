import React from 'react';

const ProjectCard = ({ img, data, index }) => {
  const cardType = index % 4 + 1;
  return (
    <div className={"card card-" + cardType}>
      <a href={data['projectLink']}>
        <img src={img} className="card-image"/>
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
