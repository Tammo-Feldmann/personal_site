import React from 'react'
import Landing from '../images/dm-landing.png'

const Projects = () => (
  <div id="projects-section" style={{marginTop:`1rem`}}>
    <h1>Projects</h1>
      <p>Here I will be including a bunch of screenshots from stuff that I am working on ...</p>
      <div style={{marginTop:`1rem`}}>
        <h3>Datamago</h3>
        <p>Time series forecasting. Machine learning platform</p>
        <img src={Landing} alt="Datamago Landing Page"></img>
        {/* <a href=  */}
      </div>
      <hr></hr>
  </div>
)

export default Projects