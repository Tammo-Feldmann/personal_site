import React from 'react';
import ExCards from './experience-cards'
import experienceStyles from "./experience-section.module.css"

const Experience = () => (
  <div className={experienceStyles.container}>
    <div className={experienceStyles.deck}>
      <ExCards></ExCards>
    </div>
    <div className={experienceStyles.label}>
      <h1>Projects</h1>
      <p>I work on most of my bigger projects collaboratively, either remotely or in person, the smaller projects in this
        section are my own and I will specify where I have written all the backend and frontend code.
      </p>
    </div>
  </div >
)

export default Experience