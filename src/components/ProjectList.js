import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProjectCard from '../components/ProjectCard';
import { importAll } from '../utils';
const images = importAll(require.context('../img/projects', false, /\.(PNG|JPE?G|SVG|GIF)$/));

const ProjectList = ({ projects }) => {
  const projectDataKeys = Object.keys(projects);

  const Projects = () => {
    if (projectDataKeys.length === 0) {
      return(
        <h1>Oops! Can't find anything...</h1>
      )
    } else {
      return projectDataKeys.map(key => {
        return (
          <ProjectCard key={key} data={projects[key]} img={images[projects[key]['imageLink']]} />
        )
      })
    } 
  }

  return (
    <div>
      {<Projects/>}
    </div>
  );
}

export default ProjectList;
