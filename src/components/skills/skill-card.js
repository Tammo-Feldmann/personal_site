import React, { Component } from "react"
import { Card } from "react-bootstrap"

class SkillCard extends Component {
  render() {
    const { title, excerpt, header } = this.props //Remember to include Icon here if you want to use it again
    return (
      <div>
        <Card bg="light" text="dark" style={{ width: "32rem" }}>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            {/* <Card.Img variant="bottom" src={img} /> */}
            <Card.Title>{title}</Card.Title>
            <Card.Text>{excerpt}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    )
  }
}

export default SkillCard
