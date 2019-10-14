import React from 'react'
import ProjectCard from './project-card'

const { Component } = React;

const myProjects = [
  { title: 'Datamago', excerpt: 'Datamago is a machine learning platform. The company focuses on time series forecasting. I have contributed to frontend features, data visualization, QA and CI pipelines, and others.' },
  { title: 'ABC Animation', excerpt: 'ABC Animation allows children to create their own 2D animations and play them in story lines' },
  { title: 'McClanan Art History', excerpt: 'this is an excerpt for project three' }
]

class ProjectsContainer extends Component {
  render() {
    return (
        <div style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          border: `1px grey solid`,
          margin: `2rem`
        }}>
          {myProjects.map(project => (
            <ProjectCard
              title={project.title}
              excerpt={project.excerpt}
            />
          ))}
       </div>
    );
  }
};

export default ProjectsContainer;