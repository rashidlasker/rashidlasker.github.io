import React from 'react';
import ProfilePic from '../img/rashid.JPG'
import ProjectList from '../components/ProjectList';
import projectData from '../data/projects.json';
import linkData from '../data/links.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedinIn, 
  faDev, 
  faMediumM, 
  faCodepen, 
  faSpotify, 
  faInstagram, 
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  document.title = "Home | Rashid Lasker";

  let featuredProjects = {};
  for (const key in projectData) {
    if (projectData[key]['featured']) {
      featuredProjects[key] = projectData[key];
    }
  }

  const iconMapping = {
    'github': faGithub,
    'linkedin': faLinkedinIn,
    'devpost': faDev,
    'medium': faMediumM,
    'codepen': faCodepen,
    'spotify': faSpotify,
    'instagram': faInstagram
  }

  const links = Object.keys(linkData).map(key => (
    <a 
      href={linkData[key]['link']} 
      alt={linkData[key]['title']} 
      key={linkData[key]['title']}
      title={linkData[key]['title']}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon 
        icon={iconMapping[key]} 
        className="icon"
      />
    </a>
  ))

  return (
    <div className="content">
      <div className="section span-2">
        <div className="subsection">
          <div className="title">Bio</div>
          <div className="text">Hey there, I'm Rashid, a coder with a passion for scalable technology and cutting-edge design.</div>
          <div className="text">I'm currently a Software Engineer at <a className="list-link" href="https://scale.com/" target="_blank" rel="noopener noreferrer">Scale AI</a>. In the past, I interned at <a className="list-link" href="https://www.uber.com/us/en/atg/" target="_blank" rel="noopener noreferrer">Uber ATG</a> and worked on 3D high-definition maps. I also developed a system design course at a nonprofit called <a className="list-link" href="https://hackcville.com/" target="_blank" rel="noopener noreferrer">HackCville</a> while studying Computer + Cognitive Science at the University of Virginia.</div>
          <div className="text">Want to collaborate on a project? <a className="list-link" href="mailto:rashidlasker@gmail.com">Let's chat.</a></div>
        </div>
        <div className="subsection">
          <div className="title">Social</div>
          <div className="social-icon-container">
            {links}
          </div>
        </div>
      </div>
      <div className="section span-1">
        <div className="subsection">
          <div className="title">What I Do</div>
          <div className="list-item">Frontend Development</div>
          <div className="list-item">Backend Development</div>
          <div className="list-item">System Design</div>
        </div>
        <div className="subsection">
          <div className="title">Books I've Recently Read</div>
          <div className="list-item">The Design of Everyday Things</div>
          <div className="list-item">The Three-Body Problem</div>
          <div className="list-item">The Beach</div>
          <div className="list-item">Ishmael</div>
        </div>
        <div className="subsection">
          <div className="title">Things I'm Learning</div>
          <div className="list-item">ROS + Robotics</div>
          <div className="list-item">Hand Drumming</div>
          <div className="list-item">Latin Dancing</div>
        </div>
      </div>
      <div className="section span-1">
        <div className="subsection">
          <div className="title">Photo</div>
          <img src={ProfilePic} alt="Rashid Lasker"/>
        </div>
      </div>
      <div className="section featured-projects">
        <div className="subsection">
          <div className="title">Featured Projects</div>
          <ProjectList projects={featuredProjects}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
