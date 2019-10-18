import React from "react"

const SkillCard = () => {
  return (
    <div style={{display: `flex`, justifyContent: `space-between`, backgroundColor: `#3F4967`, color: `white`}}>
      <div style={{margin: `1rem 4rem 10rem 0rem`, width: `100px`, height:`100px`, borderRadius: `180`, backgroundColor: `#FFFFFF`}}>
      </div>
      <div>
        <h3>This is my Skill Card</h3>
        <p>Some description of my skill. I have been developing with Javascript and Python React frameworks. I like to learn about 
         browsers and all the intricacies of cool web-technologies. I am currently learning Rust and mobile development with React native. 
        </p>
      </div>
    </div>
  );
}

export default SkillCard