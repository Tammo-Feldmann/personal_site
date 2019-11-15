import React, { Component } from "react"
import { Card } from "react-bootstrap"
import Placehoder from "../../images/Placeholder.png"
import CardStyles from "./skill-card.module.css"

class SkillCard extends Component {
  render() {
    const { title, excerpt } = this.props //Remember to include Icon here if you want to use it again
    return (
      <div className={CardStyles.cardsContainer}>
        <Card
          text="light"
          border="None"
          style={{
            backgroundColor: "#3f4967",
            width: "44rem",
            borderColor: "#3f4967",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <Card.Img
              variant="top"
              src={Placehoder}
              className={CardStyles.icon}
            />
            <Card.Body>
              <Card.Title className={CardStyles.title}>{title}</Card.Title>
              <Card.Text className={CardStyles.excerpt}>{excerpt}</Card.Text>
            </Card.Body>
          </div>
        </Card>
        <br />
      </div>
    )
  }
}

export default SkillCard
