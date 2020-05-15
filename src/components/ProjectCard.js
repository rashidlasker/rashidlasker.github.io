import React from 'react';

const ProjectCard = ({ img, data, index }) => {
  const cardType = index % 4 + 1;
  const tags = data['tags'].map(tag => (
    <span className="card-tag">{tag.toUpperCase()}</span>
  ));
  return (
    <div className={"card card-" + cardType}>
      <a href={data['projectLink']}>
        <img src={img} className="card-image"/>
        <div className="card-body">
          <div className="card-title">{data['title']}</div>
          <div className="card-text">{data['summary']}</div>
          <div className="card-tags">
            {tags}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
