import React from 'react'
import ProjectsContainer from './projects-container'

const Projects = () => (
  <div id="projects-section" style={{display: `flex`,
    }}>
    <div style={{
      flex: `1`,
      padding:`8rem 4% 4rem 4%`,
      backgroundColor: `#D9D9DA`
    }} >
    <h1>Projects</h1>
    <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
      section are my own and I will specify where I have written all the backend and frontend code.</p>
    </div>
    <div style={{
      flex: `3`,}}> 
      <ProjectsContainer></ProjectsContainer>    
    </div>
</div>
)

export default Projects