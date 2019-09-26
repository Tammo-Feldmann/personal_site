import React from 'react'
import Image from "../components/image"

const About = () => (
  <div id="about-section">
    <div style={{
      paddingTop: `11.5rem`,
      paddingBottom: `4.6rem`,
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
          maxWidth: `420px`, 
          marginBottom: `1.45rem`, 
          marginTop: `1.5rem`, 
          color: `#575964`
        }}>
          <p>I enjoy programming, problem solving, climbing, and good food. I spent 5 years chasing a PhD that I 
             completed in August of 2018. Since then I have been coding full time and I am excited every day to learn 
             more.</p>
        </div>
      </div>
      
    <div style={{float: `right`, paddingTop: `5.4rem`}}>
      <div style={{display: `flex`, justifyContent: `center`}}>
        <Image style= {{}}/>
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
      <div style={{borderRight: `163.42vh solid #A07250`,
        width: `0`,
        height: `0`,
        borderTop: `0px solid transparent`,
        borderBottom: `4rem solid transparent`,
        position: `absolute`,
        zIndex: `-2`}}>
      </div>
  </div>
)

export default About