import React from 'react'
import Image from "../components/image"
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";
import ReactTooltip from "react-tooltip";
import AboutStyles from "./about.module.css"

export default ({ children }) => (
  <div className={AboutStyles.container}>
    <div id="about-section" className={AboutStyles.aboutInfo}>
      <div > 
        <h1 style={{
          color: `#3F4967`,
          paddingTop: `7rem`
          }}
          >About Me
        </h1>
        <div style={{ 
          maxWidth: `420px`, 
          marginTop: `1.5rem`, 
          color: `#575964`
        }}>
          <p>I enjoy programming, problem solving, climbing, and good food. I spent 5 years chasing a PhD that I 
             completed in August of 2018. Since then I have been coding full time and I am excited every day to learn 
             more.
          </p>
        </div>
      <div className={AboutStyles.contact}>
        <h1 className="contact">Contact:</h1>
        <div style={{
          display:`flex`,
          justifyContent: `space-between`,
          alignItems: `baseline`,
          width: `7rem`,
          paddingLeft: `1rem`
          }}>
            <div data-tip="Copy my email to your clipboard" style={{order: `1`, cursor: 'pointer'}}>
              <div  style={{ width:`24px`}}>
                <Clipboard></Clipboard>
              </div>
            </div>
            <div data-tip="Copy my email to your clipboard" style={{order: `2`, cursor: 'pointer', padding: `10px`, borderRadius: `10px`}}>
              <a href="https://www.linkedin.com/in/tammo-feldmann/">
                <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
              </a>
            </div>
            <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{order: `3`, width:`21px`}}>
              <img src={GitHub} alt="GitHub logo"/>
            <ReactTooltip type="light"/>
            </a>
          </div>
        </div>
        </div>
        </div>
    <div className={AboutStyles.selfyContainer}>
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
)