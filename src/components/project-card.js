import React from 'react';
import Landing from '../images/dm-landing.png'
const { Component } = React;

class ProjectCard extends Component {
  render() {
    const { title, excerpt } = this.props;

    return (
      <div className="project-card" style={{border: `solid blue 1px`, margin: `1.5rem`, padding: `2rem 0rem 0rem 0rem`, boxShadow: "4px 6px 4px #3F4967", backgroundColor: `#FFFFFF`, borderRadius: `15px`,}}>
          <h2 className="card-header">
            {title}
          </h2>
          <div className="card-body" style={{maxWidth: `25rem`}}>
            {excerpt}
          </div>
          <div style={{
            margin: `4rem 1rem 2rem 1rem`,
            padding: `.8rem`,
            borderRadius: `5px`,
            backgroundColor: `#3F4967`,
            color: `white`,
            textAlign: `center`,
            width: `70%`
            }}>
          <a href="https://www.linkedin.com/in/tammo-feldmann/"
          style={{color: `#FAFAFA`}}>More information
          </a>
          </div>
          <h4>Technologies</h4>
          <div style={{display: `inline-flex`}}>
            <ul>JavaScript</ul>
            <ul>Firebase</ul>
            <ul>Jest</ul>
            <ul>Cypress</ul>
          </div>
          <div style={{minWidth: `20rem`, height: `15rem`}}>
            <img src={Landing} alt="Datamago Landing Page"></img>
          </div>
      </div>
    );
  }
};

export default ProjectCard;