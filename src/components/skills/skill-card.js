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
        </div>
      </div>
    );
  }
}

export default SkillCard