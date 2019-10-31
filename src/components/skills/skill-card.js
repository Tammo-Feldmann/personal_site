import React, { Component } from "react"
import SkillCardStyles from "./skill-card.module.css";
import MainIcon from "../main-icon"

class SkillCard extends Component {
  render() {
    const { title, excerpt, icon } = this.props;
    return (
      <div className={SkillCardStyles.container}>
        <MainIcon></MainIcon>
        <div style={{ border: `2px solid #FFFFFFF` }}>{icon}</div>
        <div className={SkillCardStyles.spacer}> </div>
        <div className={SkillCardStyles.text}>
          <h4>{title}</h4>
          <p>{excerpt}</p>
          <h4>This is my Skill Card</h4>
          <p>Some description of my skill. I have been developing with Javascript and Python React frameworks. I like to learn about
           browsers and all the intricacies of cool web-technologies. I am currently learning Rust and mobile development with React native.
        </p>
        </div>
      </div>
    );
  }
}

export default SkillCard