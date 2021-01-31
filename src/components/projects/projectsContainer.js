import React, { Component } from 'react';
import ProjectCard from './projectCard';
// import DatamagoImage from '../../images/dm-landing.png';
// import ABCya from '../../images/ABCyaScreen.png';
// import Byzantine from '../../images/Byzantine.png';
import containerStyles from "./projects.module.css";

const myProjects = [
  {
    title: 'Datamago',
    image: "dm",
    excerpt: 'Machine learning platform for time series forecasting.'
  },
  {
    title: 'adi',
    image: "adi",
    excerpt: '2D Animation for children.'
  },
  {
    title: 'adiron',
    image: "adi",
    excerpt: 'Educational Application for Medival Art History'
  },
  {
    title: 'Data',
    image: "dm",
    excerpt: 'Machine learning platform for time series forecasting.'
  }
]

class ProjectsContainer extends Component {
  render() {
    return (
      <div className={containerStyles.collection}>
        <div className={containerStyles.cards_body}>{myProjects.map(project => (
          <ProjectCard
            image={project.image}
            key={project.title}
            title={project.title}
            excerpt={project.excerpt}
          />
        ))}</div>

      </div>
    );
  }
};

export default ProjectsContainer;