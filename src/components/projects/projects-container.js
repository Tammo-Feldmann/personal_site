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
    excerpt: 'Datamago is a machine learning platform. The company focuses on time series forecasting.'
  },
  {
    title: 'ABC Animation',
    image: ABCya,
    excerpt: 'ABC Animation allows children to create their own 2D animations and play them in story lines'
  },
  {
    title: 'Byzantine Pairings',
    image: Byzantine,
    excerpt: 'this is an excerpt for project three'
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