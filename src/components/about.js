import React from "react"
import Image from "../components/image"
import LinkedIn from "../images/LinkedIn.svg"
import GitHub from "../images/GitHub.svg"
import Clipboard from "../components/clipboard"
import ReactTooltip from "react-tooltip"
import AboutStyles from "./about.module.css"

export default ({ children }) => (
  <div className={AboutStyles.container}>
    <div id="about-section" className={AboutStyles.aboutInfo}>
      <div>
        <h1 className={AboutStyles.aboutMe}>About Me</h1>
        <div className={AboutStyles.aboutText}>
          <p>
            I enjoy programming as much as being physically active in the outdoors. 
            As for so many of us, the pandemic has changed many of my usual ways of working and being.             
            In 2020 I spent more time in my text-editor than anywhere else.
            My workouts became mostly solitary activities in parks and other outdoor spaces.
            What I have missed the most in the past year of the COVID 19 pandemic are the many little chance encounters at 
            coffee shops, the gym, or my favorite bookstores. What I have appreciated the most has been a time to go deep into
            the world of computer programs. I am deeply curious to see how I personally navigate the integration of insights from this year
            and how we will as a community. 
          </p>
        </div>
        <div className={AboutStyles.contact}>
          <div className={AboutStyles.label}>Contact:</div>
          <div
            className={AboutStyles.icons}
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              marginLeft: "1rem",
              minWidth: "5rem",
            }}
          >
            <div data-tip="Copy my email to your clipboard">
              <Clipboard></Clipboard>
            </div>

            <a
              data-tip="Copy my email to your clipboard"
              href="https://www.linkedin.com/in/tammo-feldmann/"
            >
              <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" />
            </a>

            <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub">
              <img src={GitHub} alt="GitHub logo" />
              <ReactTooltip type="light" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={AboutStyles.selfyContainer}>
      <div className={AboutStyles.selfyBorder}>
        <Image />
      </div>
      <h1 className={AboutStyles.selfyName}>Tammo Feldmann</h1>
      <h4>Software Engineer</h4>
    </div>
  </div>
)
