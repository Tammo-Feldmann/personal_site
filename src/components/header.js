// eslint-disable-next-line
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainIcon from "./main-icon"
import LinkedIn from "../images/LinkedIn.svg"
import GitHub from "../images/GitHub.svg"
import Clipboard from "../components/clipboard"
import HoverText from "../components/hover-text"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F3F3F6`,
      color: 'white'
    }}
  >
    <div style={{
        marginLeft: `6.5rem`,
        marginRight: `6.5rem`,
        paddingTop: `2rem`,
        paddingBottom: `.5rem`,
        display: `flex`,
        alignItems: 'baseline',
        justifyContent: `space-between`
      }}
    >
      <MainIcon></MainIcon>
      
      <div style={{
        color: `blue`,
        display: `flex`,
        minWidth: '28rem',
        alignItems: 'baseline',
        justifyContent: 'space-between'
        }}
        >
        <HoverText>about</HoverText>
        <HoverText>expertise</HoverText>
        <HoverText>projects</HoverText>
      </div>

      <div style={{
        display: `flex`,
        justifyContent: 'space-between',
        minWidth: '5.5rem'
        }}
      >
        <p style={{cursor: 'pointer'}}>
          <Clipboard></Clipboard>
        </p>
        <a href="https://www.linkedin.com/in/tammo-feldmann/">
          <img src={LinkedIn} alt="LinkedIn logo"/>
        </a>
        <a href="https://github.com/Tammo-Feldmann" style={{color:`blue`}}>
          <img src={GitHub} alt="GitHub logo"/>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
