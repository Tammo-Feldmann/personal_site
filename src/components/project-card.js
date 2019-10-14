import React from 'react';
import Landing from '../images/dm-landing.png'
const { Component } = React;

class ProjectCard extends Component {
  render() {
    const { title, excerpt } = this.props;

    return (
      <div className="project-card" style={{
        border: `solid #E6E6E8 2px`,
        padding: `2rem 1rem 0rem 1rem`, 
        boxShadow: "2px 4px 2px #575964", 
        backgroundColor: `#D9D9DA`, 
        borderRadius: `15px`,
        margin: `1rem`,
        flex: `1 0 21%`,
        }}>
        <div style={{}}>
          <img src={Landing} alt="Datamago Landing Page"></img>
        </div>
        <div>
          <h2 className="card-header">
            {title}
          </h2>
          <div className="card-body" style={{maxWidth: `15rem`}}>
            {excerpt}
          </div>
          <div style={{display: `inline-block`}}>
            <ul>JavaScript</ul>
            <ul>Firebase</ul>
            <ul>Jest</ul>
            <ul>Cypress</ul>
          </div>
         </div>
      </div>
    );
  }
};

export default ProjectCard;