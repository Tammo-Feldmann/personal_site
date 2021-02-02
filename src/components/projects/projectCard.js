import React, { Component } from 'react';
import ProjectImage from './imageComponents/projectImage'
import DataMagoImage from './imageComponents/dmImage'
import CardStyle from './projects.module.css'

//This is a bit of an odd way to map and switch these components. I did this because of the graphQL queries for lazy loading.
//This could be done better. Maybe due for a refactor later. I tried thinking of a better way but didn't find one quickly. 
const projectImages = { datamago: <DataMagoImage />, project: <ProjectImage /> }

class ProjectCard extends Component {
  render() {
    const { title, excerpt, image } = this.props;
    return (
      <div className={CardStyle.project_card}>
        <div className={CardStyle.image}>
          {projectImages[image]}
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