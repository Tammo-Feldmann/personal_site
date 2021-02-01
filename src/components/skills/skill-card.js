import React, { Component } from "react"
import CardStyles from "./skills.module.css"

class SkillCard extends Component {
  render() {
    const { title, excerpt, icon } = this.props //Remember to include Icon here if you want to use it again
    return (
      <div className={CardStyles.cardsContainer}>
        <div
          text="light"
          border="None"
          style={{
            backgroundColor: "#3f4967",
            maxWidth: "44rem",
            borderColor: "#3f4967",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            <img
              variant="top"
              alt="somekindofAlt"
              src={icon}
              className={CardStyles.icon}
            />
            <div>
              <div className={CardStyles.title}>{title}</div>
              <div className={CardStyles.excerpt}>{excerpt}</div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default SkillCard
