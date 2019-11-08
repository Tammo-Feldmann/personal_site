
import React from 'react';
import { Col, Button, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardDeck } from 'reactstrap';

import ABCya from "../../images/ABCyaScreen.png"


const ExCards = () => (
  <div>
    <CardDeck>
      <Col sm="4">
        <Card>
          <CardImg top width="100%" src={ABCya} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardImg top width="100%" src={ABCya} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardImg top width="100%" src={ABCya} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    </CardDeck>
  </div >
)

export default ExCards