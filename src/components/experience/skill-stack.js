import React from "react"
import skillStyles from "./skill-stack.module.css"

const mySkills = [
  {
    name: "JavaScript",
    id: 1,
  },
  {
    name: "NodeJS",
    id: 2,
  },
  {
    name: "MongoDB",
    id: 3,
  },
  {
    name: "Express",
    id: 4,
  },
]

const SkillStack = () => (
  <div className={skillStyles.container}>
    Is this working?
    {mySkills.map(stack => (
      <div skill={stack.name} key={stack.id} />
    ))}
  </div>
)

export default SkillStack
