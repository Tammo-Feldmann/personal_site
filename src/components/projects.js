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
    <div style={{borderLeft: `3rem solid #3F4967`, display: `flex`, justifyContent: `space-between`, padding: `2rem`, marginTop:`1rem`, backgroundColor: `#FFFFFF`, borderRadius: `15px`}}>
        <div>
          <h2>Datamago</h2>
          <p style={{width:`20rem`}}>Datamago is a machine learning platform. The company focuses on time series forecasting. I have contributed to frontend features, 
            data visualization, QA and CI pipelines, and others. 
          </p>
          <div style={{
            margin: `1rem 1rem 2rem 1rem`,
            padding: `.8rem`,
            borderRadius: `5px`,
            backgroundColor: `#3F4967`,
            color: `white`,
            textAlign: `center`,
            width: `12rem`
            }}>
          <a href="https://www.linkedin.com/in/tammo-feldmann/"
          style={{color: `#FAFAFA`}}>More information
          </a>
          </div>

          <h4>Technologies</h4>
          <div style={{display: `inline-flex`}}>
            <ul>JavaScript</ul>
            <ul>Firebase</ul>
            <ul>Jest</ul>
            <ul>Cypress</ul>
          </div>
        </div>
        <div style={{width: `20rem`, height: `15rem`}}>
          <img src={Landing} alt="Datamago Landing Page" 
        ></img>
        </div>
      </div>
  </div>
)

export default Projects