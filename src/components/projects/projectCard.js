import React, { Component } from 'react';
import ProjectImage from './imageComponents/projectImage'
import DataMagoImage from './imageComponents/dmImage'
import styles from './projects.module.css'
import PseImage from './imageComponents/pseImage'
import MovemberImage from './imageComponents/movemberImage'
import Lifelines from './imageComponents/lifelinesImage'
import AbcYa from './imageComponents/abcyaImage'
import Avac from './imageComponents/avacImage'
import HyperIndex from './imageComponents/hyperindexImage'

//This is a bit of an odd way to map and switch these components. I did this because of the graphQL queries for lazy loading.
//This could be done better. Maybe due for a refactor later. I tried thinking of a better way but didn't find one quickly. 
const projectImages = {
  datamago: <DataMagoImage />, project: <ProjectImage />,
  pse: <PseImage />, movember: <MovemberImage />, lifelines: <Lifelines />, abcya: <AbcYa />, avac: <Avac />, hyperindex: <HyperIndex />
}

class ProjectCard extends Component {
  render() {
    const { title, excerpt, image, link } = this.props;
    return (
      <div className={styles.project_card}>
        <a className={styles.link} href={link} rel="noreferrer" target="_blank">
          <div className={styles.image}>
            {projectImages[image]}
          </div>
        </a>

        <h4 className="card-header">
          {title}
        </h4>
        <div className="card-body">
          {excerpt}
        </div>
        <div className={styles.stackWrap}>
          <div className={styles.stackItem}>JavaScript</div>
          <div className={styles.stackItem}>Firebase</div>
          <div className={styles.stackItem}>Jest</div>
          <div className={styles.stackItem}>Cypress</div>
        </div>

      </div>
    );
  }
};

export default ProjectCard;