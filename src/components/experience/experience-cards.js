import React from "react"
import { Card } from "react-bootstrap"
//import experienceStyles from "./experience-card.module.css"
import Skills from "./skill-stack"

const ExCard = ({ image, title, subtitle, excerpt, skill }) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>
        {title} {subtitle}
      </Card.Title>
      <Card.Text>{excerpt}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Skills name={skill}></Skills>
    </Card.Footer>
  </Card>
)

export default ExCard
