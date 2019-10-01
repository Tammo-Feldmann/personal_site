import React from 'react'
import Image from "../components/image"

const About = () => (
  <div id="about-section">
    <div style={{
      /* The values for padding are: top, right, bottom, left */
      padding: `2rem 0rem 0rem 0rem`,
      display: `flex`,
      justifyContent: 'space-between'
       }}>
      
      <div> 
        <h1 style={{
          color: `#353848`,
          paddingTop: `1rem`
          }}
          >About Me
        </h1>
        <div style={{ 
          maxWidth: `420px`, 
          marginBottom: `3rem`, 
          marginTop: `1.5rem`, 
          color: `#575964`
        }}>
          <p>I enjoy programming, problem solving, climbing, and good food. I spent 5 years chasing a PhD that I 
             completed in August of 2018. Since then I have been coding full time and I am excited every day to learn 
             more.</p>
        </div>
      </div>
      
    <div style={{float: `right`, padding: `8.4rem 0rem 3rem 0rem`}}>
      <div style={{display: `flex`, justifyContent: `center`}}>
        <Image/>
      </div>
        <h2 style ={{
          marginTop: `1.4rem`, 
          marginBottom: `.4rem`, 
          color: `#353848`,
          textAlign: `center`,
          fontSize: "34px"
          }}>Tammo Feldmann</h2>
        <h3 style={{
          color: `#575964`, 
          textAlign: `center`
          }}>Full-Stack Developer</h3>
      </div>
      </div>
      <hr></hr>
  </div>
)

export default About