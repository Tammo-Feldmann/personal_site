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
    title: "Web Development",
    image: Landing,
    header: "Better with Node than Bootstrap",
    icon: WebDev,
    excerpt:
      "I work in custom JavaScript framework but I am also comfortabel with React (Gastby and Next.JS). I like working on teams and thrive with good collaborators.",
  },
  {
    title: "Backend Development",
    image: Landing,
    header: "Number crunching and algorithm design",
    icon: Placeholder,
    excerpt:
      "I am always honing my craft as a programmer and I love a good puzzle. I spend a lot of my time with coding challenges. It is important to me to write clean and readable code. I mostly use Python and NodeJS for my backend development at this point. ",
  },
  {
    title: "Digital Humanities",
    image: Landing,
    header: "Staying in touch with the humanities",
    icon: Dh,
    excerpt:
      "I collaborate with former colleagues on digital humanities projects. I lead the technical implementation with an eye on making them technically feasable, visually engaging, and insightful. If you are working on a project and need technical help, I am happy to collaborate.",
  },
]

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h2 className={SkillStyles.label}>Expertise</h2>
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
