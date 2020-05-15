import React from 'react';
import ProfilePic from '../img/rashid.JPG'
import Projects from './Projects';

const Home = () => {
  return (
    <div className="bio-content">
      <div className="bio-section details">
        <div className="bio-subsection">
          <div className="bio-title">Details</div>
          <div className="bio-text">Hey there, I'm Rashid, a coder with a passion for scalable technology and cutting-edge design.</div>
          <div className="bio-text">I'm currently a Software Engineer at Scale AI. In the past, I interned at Uber ATG and developed a system design course at HackCville while studying Computer + Cognitive Science at the University of Virginia.</div>
          <div className="bio-text">Want to collaborate on a project? Let's chat.</div>
        </div>
        <div className="bio-subsection">
          <div className="bio-title">Social</div>
          <div className="bio-text">All my media goes here.</div>
        </div>
      </div>
      <div className="bio-section lists">
        <div className="bio-subsection">
          <div className="bio-title">What I Do</div>
          <div className="bio-list-item">Frontend Development</div>
          <div className="bio-list-item">Backend Development</div>
          <div className="bio-list-item">System Design</div>
          <div className="bio-list-item">Eat Food</div>
        </div>
        <div className="bio-subsection">
          <div className="bio-title">Books I've Read Recently</div>
          <div className="bio-list-item">The Design of Everyday Things</div>
          <div className="bio-list-item">The Three-Body Problem</div>
          <div className="bio-list-item">The Beach</div>
          <div className="bio-list-item">Ishmael</div>
        </div>
        <div className="bio-subsection">
          <div className="bio-title">Books I've Read Recently</div>
          <div className="bio-list-item">The Design of Everyday Things</div>
          <div className="bio-list-item">The Three-Body Problem</div>
          <div className="bio-list-item">The Beach</div>
          <div className="bio-list-item">Ishmael</div>
        </div>
      </div>
      <div className="bio-section photos">
        <div className="bio-subsection">
          <div className="bio-title">Photo</div>
          <img className="profile-pic" src={ProfilePic} alt="Rashid Lasker"/>
        </div>
      </div>
      <div className="bio-section featured-projects">
        <div className="bio-subsection">
          <div className="bio-title">Featured Projects</div>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Home;
