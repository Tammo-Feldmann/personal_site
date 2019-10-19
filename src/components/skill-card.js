import React from "react"
import SkillCardStyles from "./skill-card.module.css"

export default ({ children }) => (
  <div className={SkillCardStyles.container}>
    <div className={SkillCardStyles.icon}>
    </div>
    <div className={SkillCardStyles.spacer}> </div>
      <div className={SkillCardStyles.text}>
        <h4>This is my Skill Card</h4>
        
        <p>Some description of my skill. I have been developing with Javascript and Python React frameworks. I like to learn about 
         browsers and all the intricacies of cool web-technologies. I am currently learning Rust and mobile development with React native. 
        </p>
    </div>
  </div>
);