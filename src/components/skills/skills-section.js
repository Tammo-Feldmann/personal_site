import React from "react"
import SkillCard from "./skill-card"
import Polygon from "../polygon"
import Landing from "../../images/dm-landing.png"
import SkillStyles from "./skills-section.module.css"

const mySkills = [
  {
    title: "Web Development",
    image: Landing,
    header: "Better with Node than Bootstrap",
    excerpt:
      "I work in custom JavaScript framework but I am also comfortabel with React (Gastby and Next.JS). I like working on teams and thrive with good collaborators.",
  },
  {
    title: "Backend Development",
    image: Landing,
    header: "Number crunching and algorithm design",
    excerpt:
      "I am always honing my craft as a programmer and I love a good puzzle. I spend a lot of my time with coding challenges. It is important to me to write clean and readable code. I mostly use Python and NodeJS for my backend development at this point. ",
  },
  {
    title: "Digital Humanities",
    image: Landing,
    header: "Staying in touch with the humanities",
    excerpt:
      "I decided to put my PhD to use and start collaborating on some digital humanities projects with my friends from Stanford. My skill here is to see and design project that are technically feasable, visually engaging, and insightful. I work as the technical developer and also collaborate on the design of the questions from a humanities background. If you are working on a project and need technical help, reach out and I am happy to help.",
  },
]

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h1>Expertise</h1>
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
          />
        ))}
      </div>
    </div>
  </div>
)
