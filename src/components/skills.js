import React from 'react'
import Graph from './graph'

const Skills = () => (
  <div id="expertise-section" style={{paddingTop: `3rem`, color: `#353848` }}>
    <h1>Expertise</h1>
    <Graph></Graph>
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