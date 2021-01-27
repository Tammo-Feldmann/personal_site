import React from "react"
import Styles from "./experience-card.module.css"
import Skills from "./skillStack"

const ExCard = ({ image, title, subtitle, excerpt, skills }) => (
  <div className={Styles.card}>
    <div variant="top" src={image} className={Styles.cardImage} />
    <div>
      <div className={Styles.cardTitle}>
        {title} {subtitle}
      </div>
      <div>{excerpt}</div>
    </div>
    <div>
      <Skills skills={skills}></Skills>
    </div>
  </div>
)

export default ExCard
