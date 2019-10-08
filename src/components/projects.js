import React from 'react'
import Landing from '../images/dm-landing.png'

const Projects = () => (
  <div id="projects-section" style={{
    padding:`8rem 16% 4rem 16%`,
    backgroundColor: `#FAFAFA`,
    
    }}>
    <h1>Projects</h1>
    <p>Here I will be including a bunch of screenshots from stuff that I am working on ...</p>
    <div style={{borderLeft: `solid 68px #C06A73`, marginTop:`1rem`, backgroundColor: `#FFFFFF`, borderRadius: `35px`}}>
        <h3>Datamago</h3>
        <p>Time series forecasting. Machine learning platform</p>
        <img src={Landing} alt="Datamago Landing Page" 
        ></img>
        {/* <a href=  */}
      </div>
  </div>
)

export default Projects