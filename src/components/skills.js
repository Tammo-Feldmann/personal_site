import React from 'react';
import SkillCard from './skill-card';
import Polygon from './polygon'
import SkillStyles from "./skills.module.css"

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <Polygon></Polygon>
      <div className={SkillStyles.summary}>
        <h1>Expertise</h1>
        <p>I am just comfortable with backend problems as I like to work on frontend features. 
            Most of my work has been in Javascript/React and Python on the backend. 
            More recently I have been really fascinated with Rust. 
        </p>
      </div>
      <div className={SkillStyles.cardsContainer}>
        <SkillCard></SkillCard>
        <SkillCard></SkillCard>
        <SkillCard></SkillCard>
      </div>
    </div>
  </div>
)