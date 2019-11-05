import React from 'react'
import ProjectsContainer from './projects-container'
import containerStyles from "./projects-section.module.css"

const Projects = () => (
  <div id="projects-section" className={containerStyles.projects}>
    <div className={containerStyles.cards}>
      <ProjectsContainer></ProjectsContainer>
    </div>
    <div>
      <h1>Projects</h1>
      <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
        section are my own and I will specify where I have written all the backend and frontend code.
      </p>
    </div>
  </div>
)

export default Projects