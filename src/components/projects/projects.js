import React from 'react'
import ProjectsContainer from './projectsContainer'
import containerStyles from "./projects.module.css"

const Projects = () => (
  <div className={containerStyles.projects}>
    <div id="projects-section" className={containerStyles.inner}>
      <div className={containerStyles.header_wrapper}>
        <div className={containerStyles.header}>
          <h1>Projects</h1>
          <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
          section are my own and I will specify where I have written all the backend and frontend code.
        </p>
        </div>
      </div>
      <ProjectsContainer></ProjectsContainer>
    </div>
  </div>
)

export default Projects