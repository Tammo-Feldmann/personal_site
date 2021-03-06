import React, { Component } from 'react';
import ProjectCard from './projectCard';
import containerStyles from "./projects.module.css";

const myProjects = [
  {
    title: 'Pacific Salmon Explorer',
    image: "pse",
    excerpt: 'Large data exploration tool for the tracking of pacific samlmon status and health.',
    link: "https://www.salmonexplorer.ca/"
  },
  {
    title: 'Movember Impact',
    image: "movember",
    excerpt: 'Interactive visualization for Movember impact.',
    link: "https://impact.movember.com/"
  },

  {
    title: 'AVAC Prep Watch',
    image: "avac",
    excerpt: 'Interactive visualization for the global use of pre-exposure HIV prevention drugs.',
    link: "https://data.prepwatch.org/"
  },
  {
    title: 'Datamago',
    image: "datamago",
    excerpt: 'Machine learning platform for time series forecasting.',
    link: "https://www.datamago.com/"
  },
  {
    title: 'Lifelines',
    image: "lifelines",
    excerpt: 'Interactive Covid_19 visualization.',
    link: "https://lifelines.periscopic.com/"
  },
  {
    title: 'ABCya',
    image: "abcya",
    excerpt: 'Paint and 2D Animation applications for children.',
    link: "https://www.abcya.com/games/abcya_paint"
  },
  {
    title: 'Hyper-Indexicality',
    image: "hyperindex",
    excerpt: 'Visualization of narrative dynamics.',
    link: "https://www.hyperindexicality.com/"
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
            link={project.link}
          />
        ))}</div>

      </div>
    );
  }
};

export default ProjectsContainer;