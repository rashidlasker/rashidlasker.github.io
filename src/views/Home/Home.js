import React, { Component } from 'react';
import ProfilePic from '../../img/rashid.JPG'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-content">
        <img class="profile-pic" src={ProfilePic} alt="Rashid Lasker"/>
        <div class="text">
          <h1>Hello there!</h1>
          <p>I'm Rashid and I'm a second-year studying Computer Science at the University of Virginia. Over the years, I've designed and developed everything from web apps to games to Alexa skills to AI bots. I'm currently working on redeveloping my personal site with React, so check back here in a few weeks! In the meantime, here are a few links to get to know me better.</p>
        </div>
      </div>
    );
  }
}

export default Home;
