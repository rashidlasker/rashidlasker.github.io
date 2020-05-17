import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { importAll } from '../utils';
const thumbnails = importAll(require.context('../img/thumbnails', false, /\.(PNG|JPE?G|SVG|GIF)$/));

const ProjectList = ({ projects }) => {
  const projectDataKeys = Object.keys(projects).filter(key => projects[key]['visible']);

  return (
    <div className="card-container">
      {projectDataKeys.length === 0 
      ? <h1>Oops! Can't find anything...</h1>
      : projectDataKeys.map((key, index) => {
          return (
            <ProjectCard 
              key={key} 
              projectKey={key} 
              data={projects[key]} 
              img={thumbnails[projects[key]['thumbnail']]}
              index={index}
            />
          )
        })
      }
    </div>
  );
}

export default ProjectList;
