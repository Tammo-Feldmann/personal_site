import React, { Component } from "react"
import SkillCardStyles from "./skill-card.module.css";
import MainIcon from "../main-icon"

class SkillCard extends Component {
  render() {
    const { title, excerpt } = this.props;  //Remember to include Icon here if you want to use it again
    return (
      <div className={SkillCardStyles.container}>
        <div className={SkillCardStyles.text}>
          <MainIcon></MainIcon>
          {/* <div className={SkillCardStyles.icon}>{icon}</div> */}
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