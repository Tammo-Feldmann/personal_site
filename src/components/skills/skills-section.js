import React from "react"
import SkillCard from "./skill-card"
import Polygon from "../polygon"
import Landing from "../../images/dm-landing.png"
import SkillStyles from "./skills-section.module.css"
import Placeholder from "../../images/Placeholder.png"
import Dh from "../../images/Digital-Hume.png"
import WebDev from "../../images/Web-Dev.png"

const mySkills = [
  {
    title: "Front-End Development",
    image: Landing,
    //header: "Better with Node than Bootstrap",
    icon: WebDev,
    excerpt:
      "I strive to represent complex ideas in beautiful systems. On the front-end I am most familiar (and comfortable) with Typescript and React. I work on the whole stack and enjoy working with GraphQL or MySQL databases and like to build my own tools to make life easier.",
  },
  {
    title: "Back-End Development",
    image: Landing,
    header: "Connect people to the information that make our lives easier",
    icon: Placeholder,
    excerpt:
      "I have worked in Node.js and Python back-ends. API development, internal tools, continuous integration. I enjoy  ",
  },
  {
    title: "Data Visualization",
    image: Landing,
    header: "Turn numbers into images",
    icon: Dh,
    excerpt:
      "From digital humanities to environmental concerns, I am passionate about everything data",
  },
]

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h2 className={SkillStyles.label}>Skills</h2>
        <p className={SkillStyles.text}>
          I am just as comfortable with backend problems as I like to work on
          frontend features. Most of my work has been in Javascript/React and
          Python on the backend. More recently I have been really fascinated
          with Rust.
        </p>
      </div>
      <div className={SkillStyles.cardsContainer}>
        {mySkills.map(skill => (
          <SkillCard
            img={skill.image}
            key={skill.title}
            header={skill.header}
            title={skill.title}
            excerpt={skill.excerpt}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  </div>
)
