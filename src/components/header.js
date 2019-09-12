// eslint-disable-next-line
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
  
      <h1 style={{ display:'inline',
      paddingRight: '112px'
        }}
      >TF
      </h1>

      <ul style={{ display:'inline',
      paddingRight: '60px'
        }}
      >about
      </ul>
      <ul style={{ display:'inline',
      paddingRight: '60px'
        }}
      >expertise
      </ul>
      <ul style={{ display:'inline',
      paddingRight: '60px'
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
