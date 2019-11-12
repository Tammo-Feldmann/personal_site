
import React from 'react';
import { Col, CardDeck, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import experienceStyles from './experience-card.module.css'

const ExCard = ({ image, title, subtitle, excerpt, skill1 }) => (
  <Card className={experienceStyles.card}>
    <CardImg className={experienceStyles.cardImage} top width="100%" src={image} alt="Card image cap" />
    <CardBody className={experienceStyles.cardBody}>
      <div >
        <CardTitle className={experienceStyles.cardTitle}>{title}</CardTitle>
        <CardSubtitle className={experienceStyles.cardSubtitle}>{subtitle}</CardSubtitle>
      </div>
      <CardText className={experienceStyles.excerpt}>{excerpt}</CardText>
      <CardDeck>
        <Col className={experienceStyles.skill}>JavaScript
          {skill1}
        </Col>
        <Col className={experienceStyles.skill}>Node
        </Col>
        <Col className={experienceStyles.skill}>Python
          {skill1}
        </Col>
        <Col className={experienceStyles.skill}>Gatsby
        </Col>
      </CardDeck>
    </CardBody>
  </Card>
)

export default ExCard