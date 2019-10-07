import React from 'react'
import Image from "../components/image"
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";
import ReactTooltip from "react-tooltip";

const About = () => (
  <div id="about-section">

    <div style={{
      /* The values for padding are: top, right, bottom, left */
      padding: `4rem 16% 5rem 16%`,
      display: `flex`,
      justifyContent: 'space-between'
       }}>
      <div> 
        <h1 style={{
          color: `#3F4967`,
          paddingTop: `8rem`
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
             more.
          </p>
        </div>
        <h1 style={{
          color: `#3F4967`,
          padding: `4rem 0rem 1rem 0rem`
          }}
          >Contact
        </h1>

      <div style={{
                  display:`flex`,
                  justifyContent: `space-between`,
                  alignItems: `baseline`,
                  width: `6rem`,
                  paddingLeft: `.2rem`
                  }}>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer'}}>
                <div  style={{ width:`24px`}}>
                  <Clipboard></Clipboard>
                </div>
              </div>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', padding: `10px`, borderRadius: `10px`}}>
                <a href="https://www.linkedin.com/in/tammo-feldmann/">
                  <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
                </a>
              </div>
              <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{width:`21px`}}>
                <img src={GitHub} alt="GitHub logo"/>
              <ReactTooltip type="light"/>
              </a>
            </div>
      </div>

    <div style={{padding: `10rem 0rem 3rem 0rem`}}>
    
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