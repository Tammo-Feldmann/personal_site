import React from 'react'
import Image from "../components/image"

const About = () => (
  <div>
    <div style={{
      paddingTop: `6rem`,
      paddingBottom: `4.4rem`,
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
          marginTop: `1.5rem`, 
          color: `#575964`
        }}>
          <p>I am stoked about learning everything related to coding.</p>
        </div>
      </div>
   
      
    <div style={{float: `right`, paddingTop: `3.4rem`}}>
      <div style={{textAlign: `center`}}>
        <Image style= {{margin: `0`, padding: `0`}}/>
      </div>
      
        <h2 style ={{
          marginTop: `1.4rem`, 
          marginBottom: `.4rem`, 
          color: `#353848`,
          textAlign: `center`,
          fontSize: `24px`
          }}>Tammo Feldmann</h2>
        <h3 style={{
          color: `#575964`, 
          textAlign: `center`,
          fontSize: `20px`
          }}>Full-Stack Developer</h3>
      </div>
      </div>
    <hr style={{}}></hr>
  </div>
)

export default About