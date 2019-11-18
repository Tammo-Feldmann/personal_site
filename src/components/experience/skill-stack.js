import React, { Component } from "react"
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
    name: "",
    id: 4,
  },
]
class SkillStack extends Component {
  render() {
    const { name } = this.props

    return (
      <div className={skillStyles.container}>
        {mySkills.map(stack => (
          <div key={stack.id}>{name}</div>
        ))}
      </div>
    )
  }
}

export default SkillStack
