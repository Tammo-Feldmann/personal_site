import React from 'react';
import Sankey from '../images/SankeyDiagram.svg';

const Skills = () => (
  <div id="expertise-section" style={{
    backgroundColor: `#6C3436`,
    padding: `8rem 16% 4rem 16%`
    }}>
    <h1 style={{color:`#EFE5E5`}}>Expertise</h1>
    <p style={{maxWidth: 600, color: `#EFE5E5`}}>I have listed my various skills and their relationships in a sanky diagram. I really enjoyed seeing it and found it insightful. 
      Thought I might share how I think, here. 
    </p>
    <div style={{backgroundColor: `#F0F0F0`, borderRadius: `25px`, padding: `.3rem 2rem .3rem 2rem`, marginBottom: `4rem`}}>
      <h3 style={{paddingTop: `2rem`}}>Skill Development</h3>
      <p style={{maxWidth: `30rem`}}>I am working on building up the following skills and thought it might be nicer to see them in a sankey diagram than just a list</p>
      <img src={Sankey} alt="Sankey Diagram"></img>
    </div>
  </div>
)

export default Skills