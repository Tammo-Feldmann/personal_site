import React from 'react';
import { Col, Row, Button, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
//import experienceStyles from "./experience-section.module.css"

const Experience = () => (
  <div className={CardBody}>
    Experience section
    <Row>
      <Col sm="6">
        <Card>
          <CardImg top width="100%" src="../images/ABCyaScreen.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <CardImg top width="100%" src="../images/ABCyaScreen.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div >
)

export default Experience