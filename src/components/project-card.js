import React from 'react';
import Landing from '../images/dm-landing.png'
const { Component } = React;
// eslint-disable-next-line
import CardStyle from './project-card.module.css'

class ProjectCard extends Component {
  render() {
    const { title, excerpt } = this.props;

    return (
      <div className={CardStyle.projectCard}
>        <div>
          <img src={Landing} alt="Datamago Landing Page" ></img>
        </div>
        <div>
          <h4 className="card-header">
            {title}
          </h4>
          <div className="card-body">
            {excerpt}
          </div>
        </div>
          <div style={{display:  `flex`, flexWrap: `wrap`, fontSize: `12px`, justifyContent: `space-between`, flexBasis: `40%`}}>
            <div style={{flex: `1`}}>JavaScript</div>
            <div style={{flex: `1`}}>Firebase</div>
            <div style={{flex: `1`}}>Jest</div>
            <div style={{flex: `1`}}>Cypress</div>
          </div>
      </div>
    );
  }
};

export default ProjectCard;