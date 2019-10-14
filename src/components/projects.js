import React from 'react'
import ProjectsContainer from './projects-container'

const Projects = () => (
  <div id="projects-section" style={{display: `flex`
    }}>
    <div style={{
    padding:`8rem 5% 4rem 5%`,
    backgroundColor: `#FAFAFA`
    }} >
    <h1>Projects</h1>
    <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
      section are my own and I will specify where I have written all the backend and frontend code.</p>
    </div>
    <div> 
      <ProjectsContainer></ProjectsContainer>    
    </div>
</div>
)

export default Projects