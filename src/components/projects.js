import React from 'react'
import Landing from '../images/dm-landing.png'

const Projects = () => (
  <div id="projects-section" style={{
    padding:`8rem 16% 4rem 16%`,
    backgroundColor: `#FAFAFA`,
    }}>
    <h1>Projects</h1>
    <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
      section are my own and I will specify where I have written all the backend and frontend code.</p>
    <div style={{display: `flex`, justifyContent: `space-between`, padding: `2rem`, marginTop:`1rem`, backgroundColor: `#FFFFFF`, borderRadius: `35px`}}>
        <div>
          <h3>Datamago</h3>
          <p>Datamago is a machine learning platform. The company focuses on time series forecasting. I have contributed to frontend features, 
            data visualization, QA and CI pipelines, and others. 
          </p>
        </div>
        <div style={{width: `24rem`, height: `18rem`}}>
          <img src={Landing} alt="Datamago Landing Page" 
          ></img>
        </div>
      </div>
  </div>
)

export default Projects