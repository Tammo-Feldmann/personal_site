import React from 'react';
import SkillCard from './skill-card';
import Polygon from '../polygon'
import MeIcon from "../main-icon"
import SkillStyles from "./skills-section.module.css"

const mySkills = [
  {
    title: 'Web Development',
    image: MeIcon,
    excerpt: "I work in custom JavaScript framework but I am also comfortabel with React (Gastby and Next.JS). I like working on teams and thrive with good collaborators."
  },
  {
    title: 'Backend Development',
    image: MeIcon,
    excerpt: "I am always honing my craft as a programmer and I love a good puzzle. I spend a lot of my time with coding challenges. It is important to me to write clean and readable code. I mostly use Python and NodeJS for my backend development at this point. "
  },
  {
    title: 'Digital Humanities',
    image: MeIcon,
    excerpt: "I decided to put my PhD to use and start collaborating on some digital humanities projects with my friends from Stanford. My skill here is to see and design project that are technically feasable, visually engaging, and insightful. I work as the technical developer and also collaborate on the design of the questions from a humanities background. If you are working on a project and need technical help, reach out and I am happy to help."
  }
]

export default ({ children }) => (
  <div className={SkillStyles.container}>
    <Polygon></Polygon>
    <div id="expertise-section" className={SkillStyles.skillsSection}>
      <div className={SkillStyles.summary}>
        <h1>Expertise</h1>
        <p className={SkillStyles.text}>I am just as comfortable with backend problems as I like to work on frontend features.
            Most of my work has been in Javascript/React and Python on the backend.
            More recently I have been really fascinated with Rust.
        </p>
      </div>
      <div className={SkillStyles.cardsContainer}>
        {mySkills.map(project => (
          <SkillCard
            image={project.image}
            key={project.title}
            title={project.title}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </div>
  </div>
)