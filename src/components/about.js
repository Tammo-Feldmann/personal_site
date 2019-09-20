import React from 'react'
import Image from "../components/image"

const About = () => (
  <div>
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
        color: `#353848`,
        marginRight: `6rem`
        }}>
        <Image />
        <h2 style ={{marginTop: `1rem`, marginBottom: `.5rem`}}>Tammo Feldmann</h2>
        <h3 style={{color: `#575964`, 
        textAlign: `center`
      }}>Full-Stack Developer</h3>
      </div>
    </div>
    <hr style={{}}></hr>
  </div>
)

export default About