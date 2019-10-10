import React from 'react';
import Sankey from '../images/SankeyDiagram.svg';

const Skills = () => (
  <div id="expertise-section" style={{
    backgroundColor: `#3F4967`
    }}>
    <div style={{
      position: `absolute`,
      width: `100%`,
      height: `16.5rem`,
      backgroundColor: `#FAFAFA`,
      /* The points are: centered top, left bottom, right bottom */
      clipPath: `polygon(0 -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 12% 22%, 0 100%)`,
      }}>
    </div>
    <div style={{
    padding: `14rem 16% 4rem 16%`
    }}>
    <h1 style={{color:`#FFFFFF`}}>Expertise</h1>
    <p style={{maxWidth: 600, color: `#FFFFFF`}}>I have listed my various skills and their relationships in a sanky diagram. I really enjoyed seeing it and found it insightful. 
      Thought I might share how I think, here. 
    </p>
    <div style={{backgroundColor: `#4C5570`, borderRadius: `25px`, padding: `.3rem 2rem .3rem 2rem`, marginBottom: `4rem`, color: `#FAFAFA`}}>
      <h3 style={{paddingTop: `2rem`}}>Skill Development</h3>
      <p style={{maxWidth: `30rem`}}>I am working on building up the following skills and thought it might be nicer to see them in a sankey diagram than just a list</p>
      <img src={Sankey} alt="Sankey Diagram"></img>
    </div>
  </div>
  </div>
)

export default Skills