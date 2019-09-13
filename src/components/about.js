import React from 'react'
import Image from "../components/image"

const About = () => (
  <about>
    <div style={{ 
      display: `flex`,
      marginTop: `6rem`,
      marginBottom: `4rem` }}>
      
      <div> 
        <h1 style={{
          color: `#353848`
          }}
          >About Me
        </h1>
      </div>
      
      <div style={{ 
        maxWidth: `300px`, 
        marginBottom: `1.45rem`, 
        marginTop: `2rem`, 
        color: `#575964`
       }}>
        <p>I am stoked about learning everything related to coding.</p>
      </div>
      
      <div style={{ marginLeft: `335px`}}>
        <Image />
        <p>Hi, I am @Tammo-Feldmann</p>
      </div>
    </div>
    <hr style={{
      borderColor: '#d'
    }}></hr>
  </about>
)

export default About