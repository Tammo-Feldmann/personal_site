// eslint-disable-next-line
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainIcon from "./main-icon"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2F3854`,
      marginBottom: `1.45rem`,
      color: 'white'
    }}
  >
    <div
      style={{
        marginLeft: `12rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `inline-flex`,
        justifyContent: `center`,
        alignItems: 'baseline'
      }}
    >
      <MainIcon></MainIcon>

      <ul style={{
        }}
      >about
      </ul>

      <ul style={{
        }}
      >expertise
      </ul>
      <ul style={{
        }}
      >projects
      </ul>


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
