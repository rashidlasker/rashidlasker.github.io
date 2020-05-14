import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectCard from '../components/ProjectCard';
import { importAll } from '../utils';
const images = importAll(require.context('../img/projects', false, /\.(PNG|JPE?G|SVG|GIF)$/));

const ProjectList = ({ projects }) => {
  const projectDataKeys = Object.keys(projects);

  return (
    <div className="card-container">
      {projectDataKeys.length === 0 
      ? <h1>Oops! Can't find anything...</h1>
      : projectDataKeys.map((key, index) => {
          return (
            <ProjectCard 
              key={key} 
              data={projects[key]} 
              img={images[projects[key]['imageLink']]}
              index={index}
            />
          )
        })
      }
    </div>
  );
}

export default ProjectList;
