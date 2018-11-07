import React, { Component } from 'react';
import linkData from '../../data/links.json';
import './Links.css';
import { importAll } from '../../utils'
const images = importAll(require.context('../../img/links', false, /\.(png|jpe?g|svg)$/));

class Links extends Component {
  renderLink(data){
    const divStyle = {
      'background-color': data['background-color']
    };
    return (
      <a href={data['link']}>
        <div className='link' style={divStyle}>
          <img 
            class="link-icon" 
            src={images[data['icon']]}
            alt={data['title']}
          />
          <div class="link-text">{data['title']}</div>
        </div>
      </a>
    )
  }

  renderLinks() {
    let linkDataKeys = Object.keys(linkData);
    return linkDataKeys.map(key => {
      return (
        <div key={key} className="link-wrapper">
          {this.renderLink(linkData[key])}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="links-content">
        {this.renderLinks()}
      </div>
    );
  }
}

export default Links;
