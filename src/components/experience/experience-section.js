import React from 'react';
import ExCard from './experience-cards'
import experienceStyles from "./experience-section.module.css";
import { Col, CardDeck } from 'reactstrap'
import DatamagoImage from '../../images/dm-landing.png';
import ABCya from '../../images/ABCyaScreen.png';
import Byzantine from '../../images/Byzantine.png';

const myProjects = [
  {
    title: 'Datamago',
    subtitle: 'Project subtitle',
    image: ABCya,
    excerpt: 'Educational Application for Medival Art History',
    skill: 'Project Skill'
  },
  {
    title: 'Byzantine Pairings',
    subtitle: 'Project subtitle',
    image: Byzantine,
    excerpt: 'Educational Application for Medival Art History',
    skill: 'Project Skill'
  },
  {
    title: 'ABCya',
    subtitle: 'Project subtitle',
    image: DatamagoImage,
    excerpt: 'Educational Application for Medival Art History',
    skill: 'Project Skill'
  }
]

const Experience = () => (
  <div className={experienceStyles.container}>
    <CardDeck className={experienceStyles.deck}>
      {myProjects.map(project => (
        <Col sm="4">
          <ExCard
            image={project.image}
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            excerpt={project.excerpt}
          />
        </Col>
      ))}
    </CardDeck>
    <div className={experienceStyles.label}>
      <h1>Projects</h1>
      <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
        section are my own and I will specify where I have written all the backend and frontend code.
      </p>
    </div>
  </div >
)

export default Experience