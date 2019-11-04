import React, { Component } from "react"
import SkillCardStyles from "./skill-card.module.css";
// import MainIcon from "../main-icon"

class SkillCard extends Component {
  render() {
    const { title, excerpt, icon } = this.props;
    return (
      <div className={SkillCardStyles.container}>
        <div className={SkillCardStyles.text}>
          <div className={SkillCardStyles.icon}>{icon}</div>
          <div>
            <h4>{title}</h4>
            <p>{excerpt}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCard