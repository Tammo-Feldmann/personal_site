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
    skills: ["React", "Node.JS", "MongoDB", "Express"],
  },
  {
    title: "Byzantine Pairs",
    subtitle: "With PSU",
    image: Byzantine,
    excerpt: "Lead Developer",
    skills: ["Python", "MongoDB", "Express"],
  },
  {
    title: "Datamago",
    subtitle: "With Datamago",
    image: DatamagoImage,
    excerpt: "Frontend Developer",
    skills: ["JavaScript", "Firebase", "Cypress", "Jest"],
  },
]

const Experience = () => (
  <div className={experienceStyles.section}>
    <div className={experienceStyles.intro}>
      <h2 className={experienceStyles.sectionTitle}>Projects</h2>
      <p className={experienceStyles.text}>
        I am just as comfortable with backend problems as I like to work on
        frontend features. Most of my work has been in Javascript/React and
        Python on the backend. More recently I have been really fascinated with
        Rust.
      </p>
    </div>
    <div id="experience-section" className={experienceStyles.container}>
      <CardDeck className={experienceStyles.deck}>
        {myProjects.map(project => (
          <ExCard
            image={project.image}
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            excerpt={project.excerpt}
            skills={project.skills}
          />
        ))}
      </CardDeck>
      <div className={experienceStyles.label}>
        <h2 className={experienceStyles.labelTitle}>Projects</h2>
        <p className={experienceStyles.labelExerpt}>
          I work on most of my bigger projects collaboratively, either remotely
          or in person, the smaller projects in this section are my own and I
          will specify where I have written all the backend and frontend code.
        </p>
      </div>
    </div>
  </div>
)

export default Experience
