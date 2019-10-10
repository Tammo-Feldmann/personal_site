import React from 'react';
import SkillCard from './skill-card'

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
    <SkillCard></SkillCard>
    <SkillCard></SkillCard>
    <SkillCard></SkillCard>
    <SkillCard></SkillCard>
  </div>
  </div>
)

export default Skills