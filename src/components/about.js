import React from 'react'
import Image from "../components/image"

const About = () => (
  <about>
    <div style={{
      marginTop: `6rem`,
      marginBottom: `4rem`,
      display: `flex`,
      justifyContent: 'space-between'
       }}>
      
      <div> 
        <h1 style={{
          color: `#353848`
          }}
          >About Me
        </h1>
        <div style={{ 
          maxWidth: `300px`, 
          marginBottom: `1.45rem`, 
          marginTop: `2rem`, 
          color: `#575964`
        }}>
          <p>I am stoked about learning everything related to coding.</p>
        </div>
      </div>
      
      <div style={{
        color: `#353848`}}>
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