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
        width: `14rem`,
        flex: `1`
        }}>
        <div>
          <img src={Landing} alt="Datamago Landing Page" ></img>
        </div>
        <div>
          <h4 className="card-header">
            {title}
          </h4>
          <div className="card-body">
            {excerpt}
          </div>
          <div style={{display: `flex`}}>
            <ul style={{flex: `1`}}>JavaScript</ul>
            <ul style={{flex: `1`}}>Firebase</ul>
            <ul style={{flex: `1`}}>Jest</ul>
            <ul style={{flex: `1`}}>Cypress</ul>
          </div>
         </div>
      </div>
    );
  }
};

export default ProjectCard;