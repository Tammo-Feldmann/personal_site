import React from 'react';
import SkillCard from './skill-card';
import Polygon from '../polygon'
import SkillStyles from "./skills-section.module.css"

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h1>Expertise</h1>
        <p className={SkillStyles.text}>I am just comfortable with backend problems as I like to work on frontend features.
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