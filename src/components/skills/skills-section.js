import React from 'react';
import SkillCard from './skill-card';
import Polygon from '../polygon'
import SkillStyles from "./skills-section.module.css"
import MeIcon from "../main-icon"

const mySkills = [
  {
    title: 'First Skills',
    image: MeIcon,
    excerpt: "Enim ex amet non excepteur. Fugiat dolor ad do aliquip qui aute cupidatat aliqua tempor deserunt mollit deserunt. Dolore eu aute voluptate adipisicing. Culpa anim velit laboris tempor sit sit occaecat. Fugiat cupidatat sint anim magna officia excepteur id fugiat sint id."
  },
  {
    title: 'Second Amazing Skill',
    image: MeIcon,
    excerpt: "Enim ex amet non excepteur. Fugiat dolor ad do aliquip qui aute cupidatat aliqua tempor deserunt mollit deserunt. Dolore eu aute voluptate adipisicing. Culpa anim velit laboris tempor sit sit occaecat. Fugiat cupidatat sint anim magna officia excepteur id fugiat sint id."
  },
  {
    title: 'Third impressive Skill',
    image: MeIcon,
    excerpt: "Enim ex amet non excepteur. Fugiat dolor ad do aliquip qui aute cupidatat aliqua tempor deserunt mollit deserunt. Dolore eu aute voluptate adipisicing. Culpa anim velit laboris tempor sit sit occaecat. Fugiat cupidatat sint anim magna officia excepteur id fugiat sint id."
  }
]

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h1>Expertise</h1>
        <p className={SkillStyles.text}>I am just as comfortable with backend problems as I like to work on frontend features.
            Most of my work has been in Javascript/React and Python on the backend.
            More recently I have been really fascinated with Rust.
        </p>
      </div>
      <div className={SkillStyles.cardsContainer}>
        {mySkills.map(project => (
          <SkillCard
            image={project.image}
            key={project.title}
            title={project.title}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </div>
  </div>
)