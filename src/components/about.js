import React from "react"
import Image from "../components/image"
import LinkedIn from "../images/LinkedIn.svg"
import GitHub from "../images/GitHub.svg"
import Clipboard from "../components/clipboard"
import ReactTooltip from "react-tooltip"
import AboutStyles from "./about.module.css"
import { ButtonToolbar, Button } from "react-bootstrap"

export default ({ children }) => (
  <div className={AboutStyles.container}>
    <div id="about-section" className={AboutStyles.aboutInfo}>
      <div>
        <h1 className={AboutStyles.aboutMe}>About Me</h1>
        <div className={AboutStyles.aboutText}>
          <p>
            I enjoy programming, problem solving, climbing, and good food. I
            spent 5 years chasing a PhD that I completed in August of 2018.
            Since then I have been coding full time and I am excited every day
            to learn more.
          </p>
          <p>
            I enjoy programming, problem solving, climbing, and good food. I
            spent 5 years chasing a PhD that I completed in August of 2018.
            Since then I have been coding full time and I am excited every day
            to learn more.
          </p>
        </div>
        <div className={AboutStyles.contact}>
          <div className={AboutStyles.label}>Contact:</div>
          <ButtonToolbar>
            <Button variant="outline-light">
              <div data-tip="Copy my email to your clipboard">
                <Clipboard></Clipboard>
              </div>
            </Button>
            <Button variant="outline-light" size="sm">
              <a
                data-tip="Copy my email to your clipboard"
                href="https://www.linkedin.com/in/tammo-feldmann/"
              >
                <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" />
              </a>
            </Button>
            <Button variant="outline-light">
              <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub">
                <img src={GitHub} alt="GitHub logo" />
                <ReactTooltip type="light" />
              </a>
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    </div>
    <div className={AboutStyles.selfyContainer}>
      <div className={AboutStyles.selfyBorder}>
        <Image />
      </div>
      <h1 className={AboutStyles.selfyName}>Tammo Feldmann</h1>
      <h5>Full-Stack Developer</h5>
    </div>
  </div>
)
