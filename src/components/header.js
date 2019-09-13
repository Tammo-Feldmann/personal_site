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
        marginLeft: `12rem`,
        marginRight: `12rem`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }}
      
    >
      <MainIcon></MainIcon>

      <ul>about</ul>
      <ul>expertise</ul>
      <ul>projects</ul>
      
        <img src={EmailLogo} alt="email logo"/>
        <img src={LinkedIn} alt="LinkedIn logo"/>
        <img src={GitHub} alt="GitHub logo"/>

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
