import React, { Component } from 'react';
import ProjectCard from './projectCard';
import containerStyles from "./projects.module.css";

const myProjects = [
  {
    title: 'Pacific Salmon Explorer',
    image: "pse",
    excerpt: 'Large data exploration tool for the tracking of pacific samlmon status and health.'
  },
  {
    title: 'Movember Impact',
    image: "movember",
    excerpt: 'Interactive visualization for Movember impact.'
  },
  {
    title: 'Movember Impact',
    image: "movember",
    excerpt: 'Interactive visualization for Movember impact.'
  },
  {
    title: 'AVAC Prep Watch',
    image: "avac",
    excerpt: 'Interactive visualization for the global use of pre-exposure HIV prevention drugs.'
  },
  {
    title: 'Datamago',
    image: "datamago",
    excerpt: 'Machine learning platform for time series forecasting.'
  },
  {
    title: 'Lifelines',
    image: "lifelines",
    excerpt: 'Interactive Covid_19 visualization.'
  },
  {
    title: 'ABCya',
    image: "abcya",
    excerpt: 'Paint and 2D Animation applications for children.'
  },
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