import React, { Component } from 'react';
import ProjectCard from './project-card';
import DatamagoImage from '../../images/dm-landing.png';
import ABCya from '../../images/ABCyaScreen.png';
import Byzantine from '../../images/Byzantine.png';
import containerStyles from "./projects-container.module.css";

const myProjects = [
  {
    title: 'Datamago',
    image: DatamagoImage,
    excerpt: 'Machine learning platform for time series forecasting.'
  },
  {
    title: 'ABCya',
    image: ABCya,
    excerpt: '2D Animation for children.'
  },
  {
    title: 'Byzantine Pairings',
    image: Byzantine,
    excerpt: 'Educational Application for Medival Art History'
  }
]

class ProjectsContainer extends Component {
  render() {
    return (
      <div className={containerStyles.wrapper}>
        {myProjects.map(project => (
          <ProjectCard
            image={project.image}
            key={project.title}
            title={project.title}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    );
  }
};

export default ProjectsContainer;