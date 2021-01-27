import React, { Component } from "react"
import Styles from "./skillStack.module.css"

class SkillStack extends Component {
  render() {
    const { skills } = this.props

    return (
      <div className={Styles.container}>
        <div>
          <div border="light">
            <div>
            </div>
            <div border="dark">
              <div border="dark">
                <div>{skills[0]}</div>
                <div>{skills[1]}</div>
                <div>{skills[2]}</div>
                <div>{skills[3]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillStack
