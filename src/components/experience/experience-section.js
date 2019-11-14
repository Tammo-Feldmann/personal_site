import React from "react"
import ExCard from "./experience-cards"
import experienceStyles from "./experience-section.module.css"
import { CardDeck } from "react-bootstrap"
import DatamagoImage from "../../images/dm-landing.png"
import ABCya from "../../images/ABCyaScreen.png"
import Byzantine from "../../images/Byzantine.png"

const myProjects = [
  {
    title: "ABCya Animation",
    subtitle: "With ABCya",
    image: ABCya,
    excerpt: "Frontend Developer",
    skill: "Project Skill",
  },
  {
    title: "Byzantine Pairs",
    subtitle: "With PSU",
    image: Byzantine,
    excerpt: "Lead Developer",
    skill: "Project Skill",
  },
  {
    title: "Datamago",
    subtitle: "With Datamago",
    image: DatamagoImage,
    excerpt: "Frontend Developer",
    skill: "Project Skill",
  },
]

const Experience = () => (
  <div id="experience-section" className={experienceStyles.container}>
    <CardDeck className={experienceStyles.deck}>
      {myProjects.map(project => (
        <ExCard
          image={project.image}
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          excerpt={project.excerpt}
        />
      ))}
    </CardDeck>
    <div className={experienceStyles.label}>
      <h2 className={experienceStyles.labelTitle}>Projects</h2>
      <p className={experienceStyles.labelExerpt}>
        I work on most of my bigger projects collaboratively, either remotely or
        in person, the smaller projects in this section are my own and I will
        specify where I have written all the backend and frontend code.
      </p>
    </div>
  </div>
)

export default Experience
