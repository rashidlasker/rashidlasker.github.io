import React from 'react';
import {
  Redirect,
  useParams
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import projectData from '../data/projects.json';

const Project = () => {
  const { id } = useParams();
  if (!(id in projectData)){
    return <Redirect to="/" />;
  }

  const project = projectData[id];

  document.title = project["title"] + " | Rashid Lasker";

  const links = Object.keys(project['links']).map(key => (
    <div key={key} className="list-link">
      <a 
        href={project['links'][key]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {key}
        {' '}
        <FontAwesomeIcon 
          icon={faArrowRight}
        />
      </a>
    </div>
  ));

  const languages = project['languages'].map(language => (
    <div key={language} className="list-item">{language}</div>
  ));

  const tools = project['tools'].map(tool => (
    <div key={tool} className="list-item">{tool}</div>
  ));

  const description = project['description'].map(line => (
    <div key={line} className="text">{line}</div>
  ));

  return (
    <div className="content">
      <div className="section span-1">
        <div className="subsection">
          <div className="title">Title</div>
            <div className="text">{project['title']}</div>
        </div>
        <div className="subsection">
          <div className="title">Links</div>
          {links}
        </div>
      </div>
      <div className="section span-1">
        <div className="subsection">
          <div className="title">Languages</div>
          {languages}
        </div>
        <div className="subsection">
          <div className="title">Tools</div>
          {tools}
        </div>
      </div>
      <div className="section span-2">
        <div className="subsection">
          <div className="title">Details</div>
          {description}
        </div>
      </div>
      <div className="section">
        <div className="subsection">
          <div className="title">Photos</div>
          <img src={require('../img/projects-src/' + project['imageLink'])} />
        </div>
      </div>
    </div>
  );
}

export default Project;
