import React from 'react';
import Landing from '../../images/dm-landing.png'
const { Component } = React;
// eslint-disable-next-line
import CardStyle from './project-card.module.css'

class ProjectCard extends Component {
  render() {
    const { title, excerpt } = this.props;

    return (
      <div>
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
        </div>
        <div className={CardStyle.stackWrap}>
          <div className={CardStyle.stackItem}>JavaScript</div>
          <div className={CardStyle.stackItem}>Firebase</div>
          <div className={CardStyle.stackItem}>Jest</div>
          <div className={CardStyle.stackItem}>Cypress</div>
        </div>
      </div>
    );
  }
};

export default ProjectCard;