import React, { useState, useEffect } from 'react';
import projectData from '../data/projects.json';
import { queryMatch } from '../utils';
import ProjectList from '../components/ProjectList';

/*  
  Image notes:
  UI colors here: https://flatuicolors.com/palette/us
  Thumbnail dimensions: 700x439
  Screely link: https://www.screely.com/editor
*/

const Projects = () => {
  const [queryValue, setQueryValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(projectData);

  // TODO: Better queries
  useEffect(() => {
    let result = {};
    const query = queryValue.toLowerCase();

    for (const key in projectData) {
      const currProject = projectData[key];
      let accepted = false;

      if (queryMatch(query, currProject['title'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['summary'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['description'])) {
        accepted = true;
      } else if (queryMatch(query, currProject['languages'].join(" "))) {
        accepted = true;
      } else if (queryMatch(query, currProject['tools'].join(" "))) {
        accepted = true;
      } else if (queryMatch(query, currProject['tags'].join(" "))) {
        accepted = true;
      }

      if (accepted) {
        result[key] = projectData[key];
      }
    }

    setProjects(result);
    setLoading(false);
  }, [queryValue]);

  const onChangeHandler = event => {
    setQueryValue(event.target.value);
    setLoading(true);
  };

  return (
    <div className="content">
      {/* <input 
        type="text" 
        className="projects-search" 
        placeholder="Search"
        value={queryValue}
        onChange={onChangeHandler} 
      /> */}
      <ProjectList projects={projects}/>
    </div>
  );
}

export default Projects;
