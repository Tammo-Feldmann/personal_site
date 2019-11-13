import React from "react"
import {
  Card
} from "react-bootstrap"
//import experienceStyles from "./experience-card.module.css"


const ExCard = ({ image, title, subtitle, excerpt, skill1 }) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title} {subtitle}</Card.Title>
      <Card.Text>
        {excerpt}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
)

export default ExCard
