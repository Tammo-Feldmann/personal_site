import React, { Component } from "react"
import skillStyles from "./skill-stack.module.css"
import { Accordion, Card, Button } from "react-bootstrap"

class SkillStack extends Component {
  render() {
    const { skills } = this.props

    return (
      <div className={skillStyles.container}>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Skill Stack
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>{skills[0]}</div>
                <div>{skills[1]}</div>
                <div>{skills[2]}</div>
                <div>{skills[3]}</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default SkillStack
