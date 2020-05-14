import React from 'react';

const ProjectCard = ({ img, data }) => {
  return (
    <div className="project">
      <img src={img} />
      <div className="project-text">
        <h3>{data['title']}</h3>
        <p>{data['summary']}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
