// eslint-disable-next-line
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainIcon from "./main-icon"
import LinkedIn from "../images/LinkedIn.svg"
import GitHub from "../images/GitHub.svg"
import Clipboard from "../components/clipboard"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2F3854`,
      marginBottom: `1.45rem`,
      color: 'white'
    }}
  >
    <div style={{
        marginLeft: `13.5rem`,
        marginRight: `13.5rem`,
        padding: `1.5rem 1rem`,
        display: `flex`,
        alignItems: 'baseline',
        justifyContent: `space-between`
      }}
    >
      <MainIcon></MainIcon>
      
      <div style={{
        display: `flex`,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginRight: `1rem`
        }}
        >
        <ul>about</ul>
        <ul>expertise</ul>
        <ul>projects</ul>
      </div>

      <div style={{
        display: `flex`,
        justifyContent: 'space-between'
        }}
      >
        <Clipboard></Clipboard>
        <a href="https://www.linkedin.com/in/tammo-feldmann/" style={{marginLeft:`.5rem`}}>
          <img src={LinkedIn} alt="LinkedIn logo"/>
        </a>
        <a href="https://github.com/Tammo-Feldmann">
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
