// eslint-disable-next-line
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainIcon from "./main-icon"
import EmailLogo from "../images/email.svg"
import LinkedIn from "../images/LinkedIn.svg"
import GitHub from "../images/GitHub.svg"

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
        alignItems: 'baseline'
      }}
    >
      <MainIcon></MainIcon>
      <div style={{
        display: `flex`,
        alignContent: `space-between`,
        }}
      >
      
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
          minWidth: `6rem`,
          alignItems: 'baseline',
          justifyContent: 'space-between'
        }}
      >
        <Link to="/">
        <img src={EmailLogo} alt="email logo"/>
        </Link>
        <a href="https://www.linkedin.com/in/tammo-feldmann/">
          <img src={LinkedIn} alt="LinkedIn logo"/>
        </a>
        <a href="https://github.com/Tammo-Feldmann">
          <img src={GitHub} alt="GitHub logo"/>
        </a>
      </div>
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
