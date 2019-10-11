import React from "react"

const SkillCard = () => {
  return <div style={{display: `flex`, backgroundColor: `#3F4967`, color: `white`}}>
    <div style={{margin: `1rem 4rem 10rem 0rem`, width: `120px`, height:`120px`, borderRadius: `100px`, backgroundColor: `#FFFFFF`}}></div>
      <div style={{maxWidth: `26rem`}}>
        <h3>This is my Skill Card</h3>
        <p>Some description of my skill. I have been developing with Javascript and Python React frameworks. I like to learn about 
         browsers and all the intricacies of cool web-technologies. I am currently learning Rust and mobile development with React native. 
        </p>
        </div>
  </div>
}

export default SkillCard