import React from 'react';
import SkillCard from './skill-card';
import Polygon from './polygon'

const Skills = () => (
  <div id="expertise-section" style={{
    backgroundColor: `#3F4967`
    }}>
    <Polygon
    background = "blue"></Polygon>
    <div style={{
    padding: `14rem 16% 4rem 16%`,
    diplay: `flex`,
    justifyContent: `right`,
    color: `#FAFAFA`
    }}>
    <h1>Expertise</h1>
    <p style={{maxWidth: `40%`}}>I am just comfortable with backend problems as I like to work on frontend features. 
      Most of my work has been in Javascript/React and Python on the backend. More recently I have been really fascinated with Rust. 
    </p>
    </div>
    <div style={{padding: `2rem 4rem 0rem 8%`}}>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
    </div>
  </div>
)

export default Skills