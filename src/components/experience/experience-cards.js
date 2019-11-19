import React from "react"
import { Card } from "react-bootstrap"
import Styles from "./experience-card.module.css"
import Skills from "./skill-stack"

const ExCard = ({ image, title, subtitle, excerpt, skills }) => (
  <Card className={Styles.card}>
    <Card.Img variant="top" src={image} className={Styles.cardImage} />
    <Card.Body>
      <Card.Title className={Styles.cardTitle}>
        {title} {subtitle}
      </Card.Title>
      <Card.Text>{excerpt}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Skills skills={skills}></Skills>
    </Card.Footer>
  </Card>
)

export default ExCard
