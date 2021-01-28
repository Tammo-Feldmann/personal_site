import React from 'react';
const { Component } = React;
// eslint-disable-next-line
import CardStyle from './projects.module.css'

class ProjectCard extends Component {
  render() {
    const { title, excerpt, image } = this.props;

    return (
      <div className={CardStyle.project}>
        <div className={CardStyle.images}>
          <img src={image} alt="Datamago Landing Page" ></img>
        </div>
        <div className={CardStyle.text}>
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