import React from 'react'
import Graph from './graph'

const Skills = () => (
  <div id="expertise-section" style={{paddingTop: `1rem`, color: `#353848` }}>
    <h1>Expertise</h1>
    <p style={{maxWidth: 600}}>I have listed my various skills and their relationships in a sanky diagram. I really enjoyed seeing it and found it insightful. 
      Thought I might share how I think, here. 
    </p>
    <div style={{display: `flex`, justifyContent:`center`, marginTop: `2rem`, marginBottom: `2rem`}}>
    <Graph></Graph>
    </div>
    <div>- - - -Skills Construction hours per month -- working on my development stack</div>
    <div style={{marginTop: `4rem`, marginBottom: `4rem`}}>
      <p>JavaScript, Python, React, Flask</p>
      <p>HTML & CSS</p>
      <p>Machine Learning</p>
      <p>Time Series Forcasting</p>
    </div>
    <hr></hr>
  </div>
)

export default Skills