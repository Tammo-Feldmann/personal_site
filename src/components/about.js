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
            I enjoy programming, problem solving, climbing, and good food. I
            spent 5 years pursuing PhD that I completed in August of 2018. Since
            then I have been coding full time. I usually work in intervals of
            deep focus and like to space them out with rest and reflection. I
            work hard to be the best version of myself and can benefit from the
            occasional reminder not to take myself too seriously.
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
