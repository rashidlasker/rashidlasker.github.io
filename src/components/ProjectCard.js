import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = ({ projectKey, img, data, index }) => {
  const cardType = index % 4 + 1;
  const tags = data['tags'].map(tag => (
    <span key={tag} className="card-tag">{tag.toUpperCase()}</span>
  ));
  return (
    <Link className="card-wrapper" to={"/projects/" + projectKey}>
      <div className={"card card-" + cardType}>
        <img src={img} alt={projectKey} className="card-image"/>
        <div className="card-body">
          <div className="card-title">{data['title']}</div>
          <div className="card-text">{data['summary']}</div>
          <div className="card-tags">
            {tags}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
