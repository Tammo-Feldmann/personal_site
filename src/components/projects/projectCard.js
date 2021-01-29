import React, { Component } from 'react';
import Sankey from '../../components/header'
import CardStyle from './projects.module.css'

class ProjectCard extends Component {
  render() {
    const { title, excerpt, image } = this.props;

    return (
      <div className={CardStyle.project_card}>
        <div className={CardStyle.image}>
          {/* <img src={image} alt="Project Card Img" ></img> */}
          <Sankey />
        </div>
        <div className={CardStyle.card_header}>
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
      </div>
    );
  }
};

export default ProjectCard;